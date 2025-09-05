import express from 'express'

const port = process.env.NODE_PORT
const app = express()

// default request middlewares
app.use(express.json())
app.use(express.urlencoded())

app.listen(port, ()=>{console.log(`Bank system app is running on port ${port}`)})