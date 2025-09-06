import express from 'express'
import dotenv from 'dotenv'
import { sequelize } from './config/database'

// db models
import "./models/Account"
import "./models/User"
import "./models/Transaction"
import "./models/AuditLog"
import "./models/Session"
import "./models/Notification"

// routes
import userRouter from './routes/users'
import { errorHandler } from './middleware/errorHandler'
import { notFound } from './middleware/notFound'

dotenv.config({ quiet: true, debug: false})

const port = process.env.NODE_PORT
const app = express()

// default request middlewares
app.use(express.json())
app.use(express.urlencoded( { extended: true }))

// customer routes
app.use('/api/users', userRouter)

// 404 not found routes 
app.use(notFound)
app.use(errorHandler)

sequelize.authenticate()
    .then(()=>{
        console.log("database has been connected successfuly!");
        return sequelize.sync()
    })
    .then(()=>{
        app.listen(port, ()=>{console.log(`Bank system app is running on port ${port}`)})
    })
    .catch(error => console.log(error))