const express = require('express')
const { port } = require('./config')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')
const app = express()

// db
require('./db/mongoose')

// pasery 
app.use(bodyParser.json())

//  routes
app.use('/', apiRouter)

// server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}...`)
})