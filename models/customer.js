var customerSchema = mongoose.Schema({
    name: String,
    address: String,
    suburb: String,
    postcode: String,
    comments: [{ body: String, date: Date }],
    active: Boolean
});

var Customer = mongoose.model('Customer', customerSchema)
