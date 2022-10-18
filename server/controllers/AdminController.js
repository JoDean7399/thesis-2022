const AdminModel = require('../models/admin.model')
const ProviderModel = require('../models/provider.model')
const ContactModel = require('../models/contact.model')

deleteAdmin = async (req, res) => {
    console.log(req.body,'req.body in adminController');
    
    await AdminModel.findOneAndDelete({ _id: req.params.id }, (err, admin) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!admin) {
            return res
                .status(404)
                .json({ success: false, error: `Admin not found` })
        }
        return res.status(200).json({ success: true, data: admin })
    }).catch(err => console.log(err))
}

getAdminById = async (req, res) => {
    console.log(req.body, "here is req.body on my adminController");
    if (req.body.login === 'Jo' && req.body.password === '7399') {
        AdminModel.find({ login: req.body.login, password: req.body.password }).then((results, err) => {
            console.log(results, 'results in controller');

            if (err) {
                console.log(`Server Error: ${err}`);
            } else {
                res.send({ authenticated: true })
            }

        })
    }
}

getAdmins = async (req, res) => {
    await AdminModel.find({}, (err, admins) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!admins.length) {
            return res
                .status(404)
                .json({ success: false, error: `Admin not found` })
        }
        return res.status(200).json({ success: true, data: admins })
    }).catch(err => console.log(err))
}

getAllAdminInfo = async (req, res) => {
    ProviderModel.find().then((allProviders, err) => {
        if (err) {
            console.log(`Server Error ${err}`)
        } else {
            ContactModel.find().then((allContacts, err) => {
                if (err) {
                    console.log(`Server Error ${err}`)
                } else {
                    AdminModel.find().then((allAdmins, err) => {
                        if (err) {
                            console.log(`Server Error ${err}`)
                        } else {
                            res.send({ admin: allAdmins, contact: allContacts, provider: allProviders })
                        }
                    })
                }
            })
        }
    })
}

module.exports = {
    deleteAdmin,
    getAdmins,
    getAdminById,
    getAllAdminInfo
}