const fs = require('fs');
const data = require('../MOCK_DATA.json');
// const data = require('../models/MOCK_DATA.json')


class UserController{
// fetching all user details
    static getAllUsers = (req,res)=>{
        fs.readFile('MOCK_DATA.json','utf8',(err,data)=>{
            if(err){
                return res.status(404).json({ error:err })
            }
            return res.status(200).json(JSON.parse(data));
            
        })
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
}

module.exports = UserController