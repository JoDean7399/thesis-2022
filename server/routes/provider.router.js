const express = require('express')
const ProviderController = require('../controllers/ProviderController')
const providerRouter = express.Router()


//this creates the contact
providerRouter.post('/provider', ProviderController.createProvider)
//this will allow the user to delete their information
providerRouter.delete('/provider/:id', ProviderController.deleteProvider)
//this will get individual contact information
providerRouter.get('/provider/:id', ProviderController.getProviderById)
//this gets all contacts
providerRouter.get('/provider', ProviderController.getProviders)
providerRouter.put('/provider/:id', ProviderController.updateProvider)
module.exports = providerRouter