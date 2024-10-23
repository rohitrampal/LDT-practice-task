const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/crud');
        
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDb;