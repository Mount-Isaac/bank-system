import express from 'express'
import dotenv from 'dotenv'
import { sequelize } from './config/database'

// db models
import "./models/Account"
import "./models/User"
import "./models/Transaction"

dotenv.config()

const port = process.env.NODE_PORT
const app = express()

// default request middlewares
app.use(express.json())
app.use(express.urlencoded( { extended: true }))


sequelize.authenticate()
    .then(()=>{
        console.log("database has been connected successfuly!");
        return sequelize.sync()
    })
    .then(()=>{
        app.listen(port, ()=>{console.log(`Bank system app is running on port ${port}`)})
    })
    .catch(error => console.log(error))