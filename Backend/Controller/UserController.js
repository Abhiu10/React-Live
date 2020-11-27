const ErrorHandler = require('../Utils/ErrorHandler')
const User = require('../Model/UserModel')

exports.getAllUsers = async (req,res,next) => {
    const users = await User.find();
    if(!users)
    {
        return next(new ErrorHandler("No Users Found",404))
    }
    res.status(200).json({
        users
    })
}




exports.SignUp = async (req, res , next) => {
const {firstname,lastname,email,phone} = req.body

let ExistingUser
    try {
        ExistingUser = await User.findOne({ email: email })
    }
    catch (err) {
        return next(new ErrorHandler("Something went Wrong Signup Failed", 500))
    }

    if (ExistingUser) {
        return next(new ErrorHandler("User Already Exists, please use other email address", 422))
    }




    const newUser = await User.create({
        firstname,
        lastname,
        email,
        phone
    })

    res.status(201).json({
        user: newUser.toObject({ getters: true })
    })


}








