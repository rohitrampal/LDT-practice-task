const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    address: String,
    items:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
    }],
    quantity: Number,
    total: Number,
    status: {
        type:String,
        enum:['pending','success','reject']
    },
    orderDate:Date,
    isDeleted:{
        type:Boolean,
        default:false,
    },
},{timestamps:true})


const Order = mongoose.model('Order',orderSchema)

module.exports = Order