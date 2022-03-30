const express = require('express')
const { PORT } = require('./config')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

// db
require('./db/mongoose')

//  fix cors
app.use(cors())

// pasery 
app.use(bodyParser.json())

//  routes
app.use('/', apiRouter)

// server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}...`)
})