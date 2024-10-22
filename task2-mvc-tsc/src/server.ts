import express  from 'express';
import userRouter from './routes/user.route';

const app = express();
const port:number = 3001;

// middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routes middleware
app.use('/api/v1', userRouter);



app.listen(port,()=>{
    console.log(`server is running on port ${port} using typescript + node + express`)
})