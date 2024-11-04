const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    isDeleted:{
        type:Boolean,
        default:false,
    },
},{timestamps:true})


const Product = mongoose.model('Product',productSchema)

module.exports = Product