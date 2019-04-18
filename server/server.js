const OS = require('os');
const cluster = require('cluster');

class Server {
    constructor(expressApp) {
        this.expressApp = expressApp;
    }

    startInStandaloneMode() {
        const activeApp = this.expressApp.listen(3000, () => {
            console.log(`Express server listening with: ${JSON.stringify(activeApp.address())}`);
        });
    }
    /**
     * Though it's a small application but I have used clustering keeping scalability in mind.
     */
    startInClusterMode() {
        const cpuCount = OS.cpus().length;
        if (cpuCount < 2) {
            this.startInStandaloneMode();
        } else if (cluster.isMaster) {
            console.log(`Launching in cluster mode across ${cpuCount} CPUs`);
            for (let i = 0; i < cpuCount; i += 1) {
                cluster.fork();
            }
            cluster.on('exit', (worker) => {
                console.log(`Worker ${worker.id} exited. Launching again...`);
                cluster.fork();
            });
            cluster.on('listening', (worker, address) => {
                console.log(`Worker ${worker.id} is now connected to ${address.address || 'localhost'}:${address.port}`);
            });
        } else {
            this.startInStandaloneMode();
        }
    }
}

module.exports = Server;
