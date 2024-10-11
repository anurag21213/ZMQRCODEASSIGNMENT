const mongoose=require('mongoose')

const User=mongoose.Schema({
    email:String,
    password:String
})

const UserModel=mongoose.model('user',User)

module.exports ={UserModel}