const express = require('express');
const router = express.Router();
const ContactForm = require('../models/Contact');

// @route   POST api/contact
// @desc    Save contact form data to MongoDB
router.post('/', async (req, res) => {
    const { name, email, phone, query } = req.body;

    try {
        const newContact = new ContactForm({
            name,
            email,
            phone,
            query
        });

        await newContact.save();
        res.status(200).json({ msg: 'Contact data saved successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
