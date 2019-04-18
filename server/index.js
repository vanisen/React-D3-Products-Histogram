const app = require('./app');
const Server = require('./server');

const server = new Server(app);
server.startInClusterMode();