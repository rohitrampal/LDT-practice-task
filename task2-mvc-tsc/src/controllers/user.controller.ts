import { Request, Response } from 'express';
import fs from 'fs';
import data from '../../MOCK_DATA.json'

// interface User{
//     id:number,
//     first_name:string,
//     last_name:string,
//     email:string,
//     gender:string

// }

class UserController{
    // constructor(){}
    

    static getAllUsers = (req:Request ,res:Response):void=>{
        fs.readFile('./MOCK_DATA.json','utf8',(err,data)=>{
            if(err){
                return res.status(404).json({ error:err })
            }
            return res.status(200).json(JSON.parse(data));
            
        })
        
    }
    
    static addUser = ( req:Request ,res:Response ):void=>{
        type User = {
            id:number,
            first_name:string,
            last_name:string,
            email:string,
            gender:string
        }
        const user:User = req.body; 
        // console.log(user);
        
        data.push(user);
        fs.writeFile('MOCK_DATA.json',JSON.stringify(data),(err)=>{
            if(err){
                return res.status(404).json({ error:err })
            }
            // fs.close();
            return res.status(200).json({
                message:"User added successfully",
            });
        })
    
    }
    // updating email
    static updateUserEmail = ( req:Request, res:Response ):void=>{
        const id:number = Number(req.params.id);
        const email:string = req.body.email;
        const index:number = data.findIndex((user) => user.id === id);
        if(index === -1){
            res.status(404).json({ message: 'User not found', req: req.body.email, id: req.params });
        }
        data[index].email = email;
        fs.writeFile('MOCK_DATA.json',JSON.stringify(data),(err)=>{
            if(err){
                return res.status(404).json({ error:err })
            }
            return res.status(200).json({
                message:"user email updated",
            })
        })
    
    
    }

    // updating multiple data
    static updateMultipleDetails = ( req:Request, res:Response ):void=>{
        type User = {
            id?:number,
            first_name?:string,
            last_name?:string,
            email?:string,
            gender?:string
        }
        const id:number = Number(req.params.id);
        const user:User = req.body;
        const index: number = data.findIndex( index => index.id === id )
        if(index === -1){
            res.status(404).json({ message: 'User not found', req: req.body })
        }
        
        data[index] = { ...data[index], ...user }
        // for(let key in user){
        //     data[index][key] = user[key];
        // }
        fs.writeFile('MOCK_DATA.json',JSON.stringify(data),(err)=>{
            if(err){
                return res.status(404).json({error:"error while writting file"})
            }
            return res.status(200).json({
                message:"user updated successfully",
            })
        })
    }

    //updating whole user
    static updateUser = ( req:Request, res:Response ):void=>{
        type User = {
            id:number,
            first_name:string,
            last_name:string,
            email:string,
            gender:string
        }
        const id:number = Number(req.params.id);
        const user:User = req.body;
        const index: number = data.findIndex( index => index.id === id )
        if(index === -1){
            res.status(404).json({ message: 'User not found', req: req.body })
        }
        data[index] = user;
        fs.writeFile('MOCK_DATA.json',JSON.stringify(data),(err)=>{
            if(err){
                return res.status(404).json({error:"error while writting file"})
            }
            return res.status(200).json({
                message:"user updated successfully",
            })
        })
    }
}
export default UserController;