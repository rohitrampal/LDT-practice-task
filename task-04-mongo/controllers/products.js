const { Product } = require('../models/models.js')


class ProductController{
    static createProduct = async(req,res)=>{
        const { name, price, description, image } = req.body;
        try {
            // const isExisted = await Product.findOne({  });
            // if(isExisted){
            //     return res.status(404).json({
            //         message:'user already registered',
            //     })
            // }

            const product = new Product({
                name, 
                price, 
                description, 
                image
            })
            await product.save();
            return res.status(201).json({
                message:'product added successfully'
            })
        } catch (error) {
            console.log('catch error-->',error);
            
        }
    }


    static getAllProducts = async(req,res)=>{
        try {
            const products = await Product.find();
            if(!products){
                return res.status(404).json({
                    message:'products not found'
                })
            }
            const data = products.filter( data => data.isDeleted === false )
            return res.status(200).json(data)
        } catch (error) {
            console.log('catch error--> ',error);
            
        }
    }

    static getProduct = async(req,res)=>{
        const  id  = req.params.id;
        try {
            const product = await Product.findById({ _id:id })
            if( !product || product.isDeleted===true ){
                return res.status(404).json({
                    message:'product not found'
                })
            }
            
            return res.status(200).json(product);

        } catch (error) {
            console.log('catch error--->',error);
            
        }
    }

    static updateProductDetails = async(req,res)=>{
        const  id  = req.params.id;
        // const {} = req.body;
        try {
            const product = await Product.findByIdAndUpdate(id,{ $set:{
                price:req.body.price,
                description:req.body.description,
                image:req.body.image
            } })
            if(!product){
                return res.status(404).json({
                    message:'product not found'
                })
            }
            return res.status(200).json({
                message:'product updated successfully',
                product
            });

        } catch (error) {
            console.log('catch error--->',error);
            
        }
    }

    static deleteProductPermanent = async(req,res)=>{
        const  id  = req.params.id;
        // const {} = req.body;
        try {
            const product = await Product.findByIdAndDelete({ _id:id });
            if(!product){
                return res.status(404).json({
                    message:'product not found'
                })
            }
            return res.status(200).json({
                message:'product deleted successfully',
                product
            });

        } catch (error) {
            console.log('catch error--->',error);
            
        }
    }
    static deleteProduct = async(req,res)=>{
        const  id  = req.params.id;
        // const {} = req.body;
        try {
            const product = await Product.findById({ _id:id });
            if(!product){
                return res.status(404).json({
                    message:'user not found'
                })
            }
            product.isDeleted = true;
            await product.save();
            return res.status(200).json({
                message:'product deleted successfully',
                product
            });

        } catch (error) {
            console.log('catch error--->',error);
            
        }
    }

    static replaceProduct = async(req,res)=>{
        const  id  = req.params.id;
        // const {} = req.body;
        try {
            const product = await Product.findOneAndReplace({ _id:id },{
                name:req.body.name,
                price:req.body.price,
                description:req.body.description,
                image:req.body.image
            },{
                upsert:true,
                returnDocument:'after'
            })
            if(!product){
                return res.status(404).json({
                    message:'product not found'
                })
            }
            return res.status(200).json({
                message:'product updated successfully',
                product
            });

        } catch (error) {
            console.log('catch error--->',error);
            
        }
    }
}

module.exports = ProductController;