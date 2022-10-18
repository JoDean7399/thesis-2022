const ContactModel= require('../models/contact.model')

createContact = (req, res) => {
    const body = req.body
    console.log(body, 'body in contactController');
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all contact information',
        })
    }
    const contact = new ContactModel(body)
    if (!contact) {
        return res.status(400).json({ success: false, error: err })
    }
    contact
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: contact._id,
                message: 'Contact created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Contact not created!',
            })
        })
}

updateContact = async (req, res) => {
    const body = req.body
    console.log(body, 'update body in controller');
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    ContactModel.findOne({ _id: req.params.id }, (err, contact) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Contact not found!',
            })
        }
        contact.firstName = body.firstName
        contact.lastName = body.lastName
        contact.email = body.email
        contact.phoneNumber = body.phoneNumber
        contact.specialNeed = body.specialNeed
        contact      
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: contact._id,
                    message: 'Contact updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Contact not updated!',
                })
            })
    })
}

deleteContact = async (req, res) => {
 ContactModel.findByIdAndDelete({_id: req.params.id}).then((err) => {
     if (err) {
         console.log(`Server Error ${err}`);
     }else {
        res.send({authenticated: true})
     }
 })
}

getContactById = async (req, res) => {
    await ContactModel.findOne({ _id: req.params.id }, (err, contact) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!contact) {
            return res
                .status(404)
                .json({ success: false, error: `Contact not found` })
        }
        return res.status(200).json({ success: true, data: contact })
    }).catch(err => console.log(err))
}

getContacts = async (req, res) => {
    ContactModel.find().then((allContacts, err) => {
        if (err) {
            console.log(`Server Error: ${err}`);
        }else {
            res.json(allContacts)
        }
    })
}

module.exports = {
    createContact,
    updateContact,
    deleteContact,
    getContacts,
    getContactById,
}