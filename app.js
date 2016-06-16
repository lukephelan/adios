var bodyParser = require('body-parser')

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

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

var Customer = require('./models/customer');

app.get('/', function (request, response) {
  Customer.find({}, function(err, customers){
    response.render('index', {customers: customers});
  });
});



app.get('/about', function (request, response) {
  response.render('about', {title: 'About', about: 'A website developed entirely using Pug and Node.js utilising CRUD'});
});

app.get('/new', function (request, response) {
  response.render('new', {title: 'New', message: 'Add New Customer'});
});

app.get('/edit', function (request, response) {
  response.render('edit', {title: 'Edit', message: 'Put edit form here!'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/new', function(req,res){
  console.log('WE ARE HERE!')
  var name = req.body.name;
  console.log(name);
  var address = req.body.address;
  var suburb = req.body.suburb;
  var postcode = req.body.postcode;
  var comment = req.body.comment;
  var date = req.body.date;
  var active = req.body.active;

  mongoose.model('Customer').create({
    name : name,
    address : address,
    suburb : suburb,
    postcode : postcode,
    comments : [{body : comment, date : date}],
    active : active
  });
  res.redirect("/");
});

app.put('/edit/:id', function(req,res){
  var name = req.body.name;
  var address = req.body.address;
  var suburb = req.body.suburb;
  var postcode = req.body.postcode;
  var comment = req.body.comment;
  var date = req.body.date;
  var active = req.body.active;

  mongoose.model('Customer').findbyedit({
    name : name,
    address : address,
    suburb : suburb,
    postcode : postcode,
    comments : [{body : comment, date : date}],
    active : active
  });
});
