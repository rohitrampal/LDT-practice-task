const express = require("express");
const UserController = require("../controllers/user.controller");
const router = express.Router()



//fetching all user details
router.get('/get-all-users',UserController.getAllUsers);

// adding new user
router.post('/add-user',UserController.addUser)

// updating user email id
router.patch('/update/:id',UserController.updateUserEmail)

//updating multiple details at a time 
router.patch('/update-many/:id',UserController.updateMultipleDetails)

// updating all usser details
router.put('/update-all/:id',UserController.updateUser)


module.exports = router;