const express = require('express')
const UserController = require('../Controller/UserController')
const Router = express.Router();


Router
    .get('/',UserController.getAllUsers)
    .post('/signup',UserController.SignUp)
    


module.exports = Router