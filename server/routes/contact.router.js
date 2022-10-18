const express = require('express')
const ContactController = require('../controllers/ContactController')
const contactRouter = express.Router()

//this creates the contact
contactRouter.post('/contact', ContactController.createContact)
//this will allow the user to delete their information
contactRouter.delete('/contact/:id', ContactController.deleteContact)
//this will get individual contact information
contactRouter.get('/contact/:id', ContactController.getContactById)
//this gets all contacts
contactRouter.get('/contact', ContactController.getContacts)

module.exports = contactRouter