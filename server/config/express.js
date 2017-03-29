var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('../app/routes');
var path =  require('path');
var consign = require('consign');

app.set('clientPath', path.join(__dirname, '../..', 'client'));
console.log('Client - path: ' + app.get('clientPath'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

consign()
        .include('./service')
        .into(app);

routes(app);

module.exports = app;