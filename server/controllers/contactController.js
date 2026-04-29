const { createContact, listContacts } = require('../db/sqlite');

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
  try {
    const { firstName, lastName, email, company, subject, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields.',
      });
    }

      firstName,
      lastName,
      email,
      company,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Your message has been received. We will get back to you within 24 hours.',
      data: { id: contact._id },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

// @desc    Get all contact submissions (admin)
// @route   GET /api/contact
// @access  Private/Admin
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

module.exports = { submitContact, getContacts };

// sample request body for submitContact endpoint
{
  "firstName": "John",
  "lastName": "Doe",
  "email": " "
}
{
  "rendered": "John",
  "raw": "John",
  "full_match": 
}