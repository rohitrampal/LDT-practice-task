const express = require("express");
const { createServer } = require("http");
const path = require("path");
const { Server } = require('socket.io');
const connectDb = require("./config/dbConnection");
const Chat = require("./models/chatSchema")
require('dotenv').config()
const port = process.env.PORT;
const app = express();
app.use(express.static(path.resolve('./public')))

app.set('view engine', 'ejs');


const server =  createServer(app)

const io = new Server(server);

io.on('connection',(socket)=>{
    console.log('a new user added',socket.id);
    socket.on('join_room',async(data)=>{
        console.log(data);
        // creating room on the basis of the sending roomId from the client 
        socket.join(data.roomId);        
    })

    socket.on('client_msg',async(data)=>{
        console.log(data);
        await Chat.create(data)
        // sending data to all the users in same room
        io.to(data.roomId).emit('server_msg',data)
    })
    
    
})


app.get('/chat/:id',async(req,res)=>{
    const chats = await Chat.find({ roomId:req.params.id })
    // console.log(chats);
    
    res.render('index',{ chats:chats,id:req.params.id })
})

server.listen(port,async()=>{
    console.log(`server started at ${port}`);
    await connectDb().then(()=>console.log('mongodb connect successfully')).catch(()=>console.log('failed to connect') )
})