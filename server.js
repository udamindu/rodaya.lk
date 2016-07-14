// rodaya.lk server.js

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 8080;

var db = require('./config/db.js');

mongoose.connect(db.url); 

app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location

require('./app/routes')(app); // pass our application into routes

// start the app
app.listen(port);	
console.log('server started listening at port ' + port);
exports = module.exports = app; 

