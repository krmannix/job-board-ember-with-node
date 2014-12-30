var express = require('express'),
	mongoose = require('mongoose'),
	app		= express(),
	port = process.env.PORT || 8000,
	configDB = require('./config/database.js');

// Configure application to use EJS to render static HTML files & connect with mongoose

app.configure(function() {
	app.engine('html', require('ejs').renderFile);
	app.use(require('express-promise'));
	app.use(express.static(process.cwd() + '/public'));
	app.use(express.bodyParser());
});

var db = mongoose.connection;

db.on('error', console.error);
db.on('open', function() {

});

mongoose.connect(configDB.dbLocation);