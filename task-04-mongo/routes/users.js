const express = require('express');
const UserController = require('../controllers/users');
const router = express.Router();

router.post('/create-user',UserController.createUser );
router.get('/get-all-users',UserController.getAllUsers );
router.get('/get-user/:id',UserController.getUser );

router.patch('/update-user-details/:id',UserController.updateUserDetails );
router.put('/update-user/:id',UserController.updateUser )
router.delete('/delete-user-permanent/:id',UserController.deleteUserPermanent );
router.delete('/delete-user/:id',UserController.deleteUser );



module.exports = router