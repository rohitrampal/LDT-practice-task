const express = require("express");
const userRouter = require('./routers/user.router.js');
const connectDb = require("./models/db.config.js");

const app = express()
const port = 3000;


// middleware for geting data
app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// user router middleware
app.use('/api/v1/user',userRouter)

connectDb()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server listen at ${port}`);
        console.log(`mongodb connected successfully on local machine`);
        
    })
})

