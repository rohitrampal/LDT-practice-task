// const fs = require('fs');
// const data = require('../MOCK_DATA.json');
const User = require('../models/user.model.js')
// const data = require('../models/MOCK_DATA.json')
const ApiError = require('../utils/ApiError.js');
const  ApiResponse  = require('../utils/ApiResponse.js');

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
        try {
            const user = await User.find({ id:id })
            
            if(!user){
                throw new ApiError(404,"users not found");
                // return res.status(404).json({ error:"User not found" })
            }
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
            
        }
    }

// adding data
    static addUser  = async(req,res)=>{
        console.log(req.body);
        
        const { id, first_name, last_name, email } = req.body;
        try {
            
            if( email==="" && id ==="" && !email ){
                throw new ApiError( 404,"field should not be empty" );
            }
            
            const existedUser = await User.findOne( {email} )
            
            if(existedUser){
                throw new ApiError( 400,"Email already exists" );
            }


            await  User.create({
                id,
                email,
                first_name,
                last_name
            });
            return res.status(200).json({
                message:"User added successfully",
            });
        } catch (error) {
            throw new ApiError(500,"server error");
            
        }


    }
// updating user email 
    static updateUserEmail = async(req,res)=>{
        const id = req.params.id;
        const { email } = req.body;
        // console.log(email);
        
        try {
            const isExist = await User.findOne({ id:id });
            if(!isExist){
                throw new ApiError(404,"User not found");
            }
            const updateEmail = await User.updateOne({id:id},[ {$set:{email:email}} ])
            return res.status(200).json({
                message:"email id updated successfully"
            })
        } catch (error) {
            throw new ApiError(500 , "error from server");
        }
        
    }
    
// updating all usser details
    static updateUser = async(req,res)=>{
        const userId = req.params.id;
        const { id,email,first_name,last_name } = req.body;
        try {
            const isExist = await User.findOne({id:userId});
            if(!isExist){
                throw new ApiError(404,"User not found");
            }
            await User.updateOne({id:userId},{$set:{
                id:id,
                email:email,
                first_name:first_name,
                last_name:last_name
            }})
            return res.status(200).json({
                message:"user updated successfully"
            })
        } catch (error) {
            throw new ApiError(500,"server error")
        }
        
    }

//updating multiple details at a time
    static updateMultipleDetails = async(req,res)=>{
        const userId = req.params.id;
        const {} = req.body;
        try {
            const isExist = await User.findOne({id:userId});
            console.log("here");
            if(!isExist){
                throw new ApiError(404,"User not found");
            }
            await User.updateOne({id:userId},{$set:{
                id:id,
                email:email,
                first_name:first_name,
                last_name:last_name
            }})
            return res.status(200).json({
                message:"user updated successfully"
            })
        } catch (error) {
            throw new ApiError(500,"server error")
        }
        
    } 

// deleting user
    static deleteUser = async(req,res)=>{
        const id = req.params.id;
        try {
            const isExist = await User.findOne({ id:id })
            if(!isExist){
                throw new ApiError(404,"User not found");
            }
            await User.deleteOne({id:id})
            return res.status(200).json({
                message:"user deleted successfully"
            })
        } catch (error) {
            throw new ApiError(500,"server error");
        }
        
    }
}

module.exports = UserController