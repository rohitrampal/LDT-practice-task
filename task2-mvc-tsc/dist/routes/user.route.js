"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = express_1.default.Router();
// fetching all users
router.get('/get-all-users', user_controller_1.default.getAllUsers);
// creating user
router.post('/add-user', user_controller_1.default.addUser);
// updating user email
router.patch('/update-email/:id', user_controller_1.default.updateUserEmail);
// updating user multiple data
router.patch('/update-multiple/:id', user_controller_1.default.updateMultipleDetails);
// updating whole user data
router.put('/update-user/:id', user_controller_1.default.updateUser);
exports.default = router;
