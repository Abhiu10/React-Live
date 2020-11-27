const mongoose = require('mongoose')
const uniquevalidtor = require('mongoose-unique-validator')
const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname:{
        type:String,
        required:true
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    phone: {
        type: Number,
        required:true,
        minlength: 10,
        maxlength: 10
    }



})


UserSchema.plugin(uniquevalidtor)
const User = mongoose.model('User', UserSchema)

module.exports = User