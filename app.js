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

console.log('Brad was here!');

var customerSchema = mongoose.Schema({
    name: String,
    address: String,
    suburb: String,
    postcode: String,
    comments: [{ body: String, date: Date }],
    active: Boolean
});

var Customer = mongoose.model('Customer', customerSchema);
