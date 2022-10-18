const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/catsApp', 
    {     
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })
    console.log('Connected to database');
    
const db = mongoose.connection
module.exports = db;