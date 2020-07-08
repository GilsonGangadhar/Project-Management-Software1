const express = require('express')
const app = express()
const configureDB = require('./config/database')
const routes = require('./config/routes')
const port = 3055
app.use(express.json())
app.use('/', routes)
configureDB()

//enables express to parse json data


//setup routes




app.listen(port, () => {
    console.log('listening to port', port)
})