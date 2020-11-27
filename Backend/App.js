const express = require('express')  
const UserRouter = require('./Router/UserRouter')
const bodyParser = require('body-parser')
const App = express();
const cors = require('cors')


App.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
App.use(bodyParser.json()); // Send JSON responses
//App.use(express.json())

App.use(cors())



App.use('/api/v1/users',UserRouter)



module.exports = App
