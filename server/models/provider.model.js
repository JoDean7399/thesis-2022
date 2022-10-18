const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Provider = new Schema(
    {
        name: {type: String, required: true},
        locale: {type: String, required: true},
        available:{type: String, required: true},      
    }
)
module.exports = mongoose.model('providers', Provider)