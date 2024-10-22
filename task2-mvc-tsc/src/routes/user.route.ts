import express  from 'express';
import UserController from '../controllers/user.controller';
const router = express.Router()

// fetching all users
router.get( '/get-all-users',UserController.getAllUsers );

// creating user
router.post('/add-user',UserController.addUser);

// updating user email
router.patch('/update-email/:id',UserController.updateUserEmail);

// updating user multiple data
router.patch('/update-multiple/:id',UserController.updateMultipleDetails);

// updating whole user data
router.put('/update-user/:id',UserController.updateUser);

export default router;