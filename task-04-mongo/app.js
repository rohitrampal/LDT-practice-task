require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./routes/users.js');
const orderRouter = require('./routes/orders.js');
const productRouter = require('./routes/products.js');
require('./models/models.js')

const app = express();

const port =  3001;
// middleware
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}))

// routes middleware
app.use('/api/v1/users',userRouter)
app.use('/api/v1/orders',orderRouter)
app.use('/api/v1/products',productRouter)



// database connection
const URI = 'mongodb://localhost:27017/mongo';
const connectDb = async()=>{
    try {
        await mongoose.connect(URI);
    } catch (error) {
        console.log('connection error---------->',error);
    }
}

connectDb()
.then(()=>console.log('mongodb connect successfully'))
.catch(err => console.log(err));

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
    
})