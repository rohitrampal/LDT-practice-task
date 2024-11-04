const { User } = require('../models/models.js')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

class UserController{
    static createUser = async(req,res)=>{
        const { firstName, lastName, email, password, gender, phoneNumber } = req.body;
        try {
            const isExisted = await User.findOne({ email });
            if(isExisted){
                return res.status(404).json({
                    message:'user already registered',
                })
            }
            const data = {
              phoneNumber  
            }
            const token = await jwt.sign( data,'abc123XYZ',{ expiresIn:'1h' } )
            const hashPassword = await bcrypt.hash(password,12);
            const user = new User({
                firstName,
                lastName,
                email,
                password:hashPassword,
                gender,
                phoneNumber,
                token
            })
            await user.save();
            return res.status(201).json({
                message:'user created successfully'
            })
        } catch (error) {
            console.log('catch error-->',error);
            
        }
    }


    static getAllUsers = async(req,res)=>{
        try {
            const users = await User.find();
            if(!users){
                return res.status(404).json({
                    message:'users not found'
                })
            }
            const data = users.filter( data => data.isDeleted === false )
            return res.status(200).json(data)
        } catch (error) {
            console.log('catch error--> ',error);
            
        }
    }

    static getUser = async(req,res)=>{
        const  id  = req.params.id;
        try {
            const user = await User.findById({ _id:id })
            if( !user || user.isDeleted===true ){
                return res.status(404).json({
                    message:'user not found'
                })
            }
            
            return res.status(200).json(user);

        } catch (error) {
            console.log('catch error--->',error);
            
        }
    }

    static updateUserDetails = async(req,res)=>{
        const  id  = req.params.id;
        // const {} = req.body;
        try {
            const user = await User.findByIdAndUpdate(id,{ $set:{
                firstName:req.body.firstName,
                email:req.body.email,
            } })
            if(!user){
                return res.status(404).json({
                    message:'user not found'
                })
            }
            return res.status(200).json({
                message:'user updated successfully',
                user
            });

        } catch (error) {
            console.log('catch error--->',error);
            
        }
    }

    static deleteUserPermanent = async(req,res)=>{
        const  id  = req.params.id;
        // const {} = req.body;
        try {
            const user = await User.findByIdAndDelete({ _id:id });
            if(!user){
                return res.status(404).json({
                    message:'user not found'
                })
            }
            return res.status(200).json({
                message:'user deleted successfully',
                user
            });

        } catch (error) {
            console.log('catch error--->',error);
            
        }
    }
    static deleteUser = async(req,res)=>{
        const  id  = req.params.id;
        // const {} = req.body;
        try {
            const user = await User.findById({ _id:id });
            if(!user){
                return res.status(404).json({
                    message:'user not found'
                })
            }
            user.isDeleted = true;
            await user.save();
            return res.status(200).json({
                message:'user deleted successfully',
                user
            });

        } catch (error) {
            console.log('catch error--->',error);
            
        }
    }

    static updateUser = async(req,res)=>{
        const  id  = req.params.id;
        // const {} = req.body;
        try {
            const user = await User.findOneAndReplace({ _id:id },{
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                phoneNumber:req.body.phoneNumber,
                password:req.body.password,
                gender:req.body.gender
            },{
                upsert:true,
                returnDocument:'after'
            })
            if(!user){
                return res.status(404).json({
                    message:'user not found'
                })
            }
            return res.status(200).json({
                message:'user updated successfully',
                user
            });

        } catch (error) {
            console.log('catch error--->',error);
            
        }
    }
}

module.exports = UserController;