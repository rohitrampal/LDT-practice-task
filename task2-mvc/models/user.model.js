const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        require:true
    },
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique:true,
        require:true
    },
    gender: {
        type: String,
        default:null
    }
},{timestamps:true})

const userModel =  mongoose.model('user',userSchema);
module.exports = userModel;