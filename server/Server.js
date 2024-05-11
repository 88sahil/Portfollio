require('dotenv').config()
const express = require('express')
const App = express()
const cors = require('cors')
const cookieparser = require('cookie-parser')
const GlobalErrorHandle = require('./utils/GlobalErrorHandle')
const ProjectR = require('./routes/ProjectRoute')
let db = require('./db/db')
db()
App.use(cors({
    origin:true,
    credentials:true
}))
App.use(express.json())
App.use(cookieparser())
App.use('/api/project',ProjectR)
App.use(GlobalErrorHandle)
App.listen(process.env.port,()=>{
    console.log(`someone this looking for you on ${process.env.port}`)
})