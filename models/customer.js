var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    name: String,
    address: String,
    suburb: String,
    postcode: String,
    comments: [{ body: String, date: Date }],
    active: Boolean
});

var Customer = mongoose.model('Customer', customerSchema)

var sven = new Customer({
  name: 'Sven',
  address: '1 Happy Street',
  suburb: 'Cremorne',
  postcode: '3121',
  comments: [{body: 'Sven is swell', date: '2016-09-15'}],
  active: true
});

sven.save(function(err) {
  if (err) throw err;

  console.log('Customer created!');
});

var paul = new Customer({
  name: 'Paul',
  address: '2 Grumpy Street',
  suburb: 'Grumpville',
  postcode: '3111',
  comments: [{body: 'Paul is not a happy chappy', date: '2016-08-07'}],
  active: true
});

paul.save(function(err) {
  if (err) throw err;

  console.log('Customer created!');
});

var karen = new Customer({
  name: 'Karen',
  address: '12 Skimpton Street',
  suburb: 'Williamstown',
  postcode: '3016',
  comments: [{body: 'Karen is a lawyer', date: '2016-02-07'}],
  active: false
});

karen.save(function(err) {
  if (err) throw err;

  console.log('Customer created!');
});

module.exports = Customer;

Customer.find({}, function(err, customers) {
  if (err) throw err;

  // object of all the users
  console.log(customers);
});
