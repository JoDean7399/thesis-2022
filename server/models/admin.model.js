const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Admin = new Schema(
    {
        login: {type: String, required: true},
        password: {type: String, required: true}
    }
)
module.exports = mongoose.model('admins', Admin)