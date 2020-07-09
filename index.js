const express = require('express')
const app = express()
const configureDB = require('./config/database')
const routes = require('./config/routes')
const port = 3055
//enables express to parse json data
app.use(express.json())
//setup routes
app.use('/', routes)
configureDB()

app.listen(port, () => {
    console.log('listening to port', port)
})