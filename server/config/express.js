var express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        routes = require('../app/routes'),
        path =  require('path'),
        consign = require('consign');

app.set('clientPath', path.join(__dirname, '../..', 'client'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

consign()
        .include('./service')
        .into(app);

routes(app);

module.exports = app;