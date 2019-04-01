// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

// var port = 3000;

// var app = express();

// app.use(express.static(process.cwd() + "/public"));

// app.use(bodyParser.urlencoded({extended: false}));

// app.use(methodOverride("_method"));

// // Set Handlebars
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({defaultLayout: "main"}));

// app.set("view engine", "handlebars");

// // Imports routes and give server access
// // var routes = require('controllers/burgers_contorller.js');

// // app.use("/", routes);

// app.listen(port);

// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('node_modules/burgers_controller.js');
app.use('/', router);

// Open Server
var port = process.env.PORT || 3000;
app.listen(port);