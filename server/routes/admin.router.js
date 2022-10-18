const express = require('express')
const adminRouter = express.Router()
const AdminController = require('../controllers/AdminController')
const root = __dirname+'../../client/public'
const adminModel = require('../models/admin.model')

let adminCred ={
    login: 'Jo',
    password: '7399'
}

//This creates the admin info when the site is started so it can be accessed for the admin page
adminModel.find({login: adminCred.login, password: adminCred.password}).then((results,err)=>{
    if (results.length === 0) {
        let admin = new adminModel(adminCred)
        admin.save() 
    }
})

adminRouter.get('/', (req, res) => {
    res.sendFile(root+'/index.html')
})

//this finds the admin info and authenticates if to allow site owner to access the admin page
adminRouter.post('/admin', AdminController.getAdminById)
//this will get all admins for the site
adminRouter.get('/admins', AdminController.getAdmins)
//this gets all admins, contacts and providers information and combines them to be displayed on the AdminPage
adminRouter.get('/adminDB', AdminController.getAllAdminInfo)

module.exports = adminRouter