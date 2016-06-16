var express = require('express');
var app = express();
app.set('view engine', 'pug');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adios');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var Customer = require('./models/customer');

app.get('/', function (request, response) {
  Customer.find(function(err, customer){
    response.send(customer);
  });
  // response.render('index', {title: 'Index', message: 'Welcome to the world of Adios'});
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
