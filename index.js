const express = require('express')
const app = express()
const configureDB = require('./config/database')
const routes = require('./config/routes')
const port = 3055
const cors = require('cors')
const path = require('path')
//enables express to parse json data
app.use(express.json())

app.use(cors())

//setup routes
app.use('/', routes)
configureDB()

app.use(express.static(path.join(__dirname,"client/build")))

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

app.listen(port, () => {
    console.log('listening to port', port)
})