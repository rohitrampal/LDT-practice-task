const fs = require('fs');
const data = require('../MOCK_DATA.json');
const User = require('../models/user.model.js')
// const data = require('../models/MOCK_DATA.json')
const ApiError = require('../utils/ApiError.js')

class UserController{
// fetching all user details
    static getAllUsers = async(req,res)=>{
       try {
         const users =await User.find({});
         if(!users){
             return res.status(404).json({message: 'No user found'});
         }
         return res.status(200).json(users);
       } catch (error) {
            console.log(error);
       }
    }

// get particular user
    static getUser = async(req,res)=>{
        const id = req.params.id;
        console.log(id);
        
        try {
            const user = await User.find({ id:id })
            
            if(!user){
                // throw new ApiError(404,"users not found");
                return res.status(404).json({ error:"User not found" })
            }
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
            
        }
    }

// adding data
    static addUser  = (req,res)=>{
        const user = req.body;
        data.push(user)
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
// updating user email 
    static updateUserEmail = (req,res)=>{
        const id = req.params.id;
        const { email } = req.body;
        
        for(let  i=0;i<data.length;i++){
            if( data[i].id == id ){
                data[i].email = email;
                fs.writeFile('MOCK_DATA.json',JSON.stringify(data),(err)=>{
                    if(err){
                        return res.status(404).json({ error:err })
                    }
                    return res.status(200).json({
                        message:"user email updated",
                    })
                })
                break;
            }
        }
    }
    
// updating all usser details
    static updateUser = (req,res)=>{
        const id = req.params.id;
        const user = req.body;
        const index = data.findIndex( index=> index.id == id )
        if(index == -1){
            return res.status(404).json({ error:"User not found" })
        }
        data[index] = user
        fs.writeFile('MOCK_DATA.json',JSON.stringify(data),(err)=>{
            if(err){
                return res.status(404).json({error:"error while writting file"})
            }
            return res.status(200).json({
                message:"user updated successfully",
            })
        })
        
    }

//updating multiple details at a time
    static updateMultipleDetails = (req,res)=>{
        const id = req.params.id;
        const user = req.body;
        const index = data.findIndex( index=> index.id == id )
        if(index == -1){
            return res.status(404).json({ error:"User not found" })
        }
        for(let key in user){
            data[index][key] = user[key];
        }
        fs.writeFile('MOCK_DATA.json',JSON.stringify(data),(err)=>{
            if(err){
                return res.status(404).json({error:"error while writting file"})
            }
            return res.status(200).json({
                message:"user updated successfully",
            })
        })
        
    } 

// deleting user
    static deleteUser = (req,res)=>{
        const id = req.params.id;
        const index = data.findIndex(index => index.id == id);
        if(index === -1){
            return res.status(404).json({ error: "User not found" });
        }
        data.splice(index, 1);
        fs.writeFile('MOCK_DATA.json', JSON.stringify(data), (err) => {
            if(err){
                return res.status(404).json({ error: "Error while writing file" });
            }
            return res.status(200).json({
                message:"user delete successfully",
            })
        })
        
    }
}

module.exports = UserController