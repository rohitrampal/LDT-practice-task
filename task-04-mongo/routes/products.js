const express = require('express');
const ProductController = require('../controllers/products');
const router = express.Router();

router.post('/create-product',ProductController.createProduct );
router.get('/get-all-products',ProductController.getAllProducts );

router.get('/get-product/:id',ProductController.getProduct );
router.patch('/update-product-details/:id',ProductController.updateProductDetails );
router.put('/replace-product/:id',ProductController.replaceProduct )
router.delete('/delete-product-permanent/:id',ProductController.deleteProductPermanent );
router.delete('/delete-product/:id',ProductController.deleteProduct );



module.exports = router