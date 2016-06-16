var express = require('express');
var app = express();
app.set('view engine', 'pug');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var customerSchema = mongoose.Schema({
    name: String,
    address: String,
    suburb: String,
    postcode: String,
    comments: [{ body: String, date: Date }],
    active: Boolean
});

var Customer = mongoose.model('Customer', customerSchema);

app.set('view engine', 'pug');

app.get('/', function (request, response) {
  response.render('index', {title: 'Index', message: 'Welcome to the world of Adios'});
});

app.get('/about', function (request, response) {
  response.render('about', {title: 'About', about: 'A website developed entirely using Pug and Node.js utilising CRUD'});
});

app.get('/new', function (request, response) {
  response.render('new', {title: 'New', message: 'Put new form here!'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
