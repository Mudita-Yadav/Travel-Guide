const mongoose = require('mongoose');

const ContactFormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    query: { type: String, required: true }
});

module.exports = mongoose.model('ContactForm', ContactFormSchema);
