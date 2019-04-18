const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
const productsApi = require('./routes/product');

const app = express();

// CONFIGURATIONS
app.set('trust proxy', 1);
app.set('x-powered-by', false);

// handlebars express html template engine setup
app.set('views', path.join(__dirname, '../build'));
app.engine('html', exphbs({ extname: '.html', helpers: { json: JSON.stringify } }));
app.set('view engine', 'html');


// Middleware Setup
app.use(compression());

// static assets
app.use(favicon(path.join(__dirname, '../build', 'favicon.ico')));
app.use('/static', express.static(path.join(__dirname, '../build/static'), { maxAge: '30d' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// APIs
app.use('/api/products', productsApi);

// serve index html for unmatched and root routes
// this should be the last route to match.
app.get('/*', (req, res) => {
    res.render('index');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: app.get('env') === 'production' ? {} : err,
    });
});

module.exports = app;
