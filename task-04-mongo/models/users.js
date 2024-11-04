const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:String,
    email:{
        type:String,
        require:true,
        unique:true,
    },
    phoneNumber:{
        type:Number,
    },
    password:{
        type:String,
    },
    gender:String,
    token:String,
    isDeleted:{
        type:Boolean,
        default:false,
    },
},{timestamps:true})


const User = mongoose.model('User',userSchema)

module.exports = User