const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dbjs = require('./connection/connection')
const adminRouter = require('./routes/admin.router')
const authRouter = require('./routes/auth.router')
const contactRouter = require('./routes/contact.router')
const providerRouter = require('./routes/provider.router')
const userRouter = require('./routes/user.router')
const dotenv = require('dotenv')
const apiPort = 3000
const app = express()
const root = __dirname+'../../client/public'

dbjs.on('error', console.error.bind(console, 'MongoDB connection error:'))

//Load ENV variables
dotenv.config({path:'./config/config.env'})

app.use(express.static(root))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api', adminRouter)
app.use('/api', contactRouter)
app.use('/api', providerRouter)
app.use('/api', authRouter);
app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.sendFile(root+'/index.html')
});

app.listen(apiPort, ()=>{
    console.log(`Listening on port ${apiPort}`);
});