var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.get('/', function (req, res) {
	res.render('index' });
})

app.get('/about', function (req, res) {
	res.render('about' });
})

app.get('/new', function (req, res) {
	res.render('new' });
})

console.log('Brad was here!');
