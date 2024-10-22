"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const MOCK_DATA_json_1 = __importDefault(require("../../MOCK_DATA.json"));
class UserController {
    constructor() { }
}
UserController.getAllUsers = (req, res) => {
    fs_1.default.readFile('./MOCK_DATA.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(404).json({ error: err });
        }
        return res.status(200).json(JSON.parse(data));
    });
};
UserController.addUser = (req, res) => {
    const user = req.body;
    // console.log(user);
    MOCK_DATA_json_1.default.push(user);
    fs_1.default.writeFile('MOCK_DATA.json', JSON.stringify(MOCK_DATA_json_1.default), (err) => {
        if (err) {
            return res.status(404).json({ error: err });
        }
        // fs.close();
        return res.status(200).json({
            message: "User added successfully",
        });
    });
};
// updating email
UserController.updateUserEmail = (req, res) => {
    const id = Number(req.params.id);
    const email = req.body.email;
    const index = MOCK_DATA_json_1.default.findIndex((user) => user.id === id);
    if (index === -1) {
        res.status(404).json({ message: 'User not found', req: req.body.email, id: req.params });
    }
    MOCK_DATA_json_1.default[index].email = email;
    fs_1.default.writeFile('MOCK_DATA.json', JSON.stringify(MOCK_DATA_json_1.default), (err) => {
        if (err) {
            return res.status(404).json({ error: err });
        }
        return res.status(200).json({
            message: "user email updated",
        });
    });
};
// updating multiple data
UserController.updateMultipleDetails = (req, res) => {
    const id = Number(req.params.id);
    const user = req.body;
    const index = MOCK_DATA_json_1.default.findIndex(index => index.id === id);
    if (index === -1) {
        res.status(404).json({ message: 'User not found', req: req.body });
    }
    MOCK_DATA_json_1.default[index] = Object.assign(Object.assign({}, MOCK_DATA_json_1.default[index]), user);
    // for(let key in user){
    //     data[index][key] = user[key];
    // }
    fs_1.default.writeFile('MOCK_DATA.json', JSON.stringify(MOCK_DATA_json_1.default), (err) => {
        if (err) {
            return res.status(404).json({ error: "error while writting file" });
        }
        return res.status(200).json({
            message: "user updated successfully",
        });
    });
};
//updating whole user
UserController.updateUser = (req, res) => {
    const id = Number(req.params.id);
    const user = req.body;
    const index = MOCK_DATA_json_1.default.findIndex(index => index.id === id);
    if (index === -1) {
        res.status(404).json({ message: 'User not found', req: req.body });
    }
    MOCK_DATA_json_1.default[index] = user;
    fs_1.default.writeFile('MOCK_DATA.json', JSON.stringify(MOCK_DATA_json_1.default), (err) => {
        if (err) {
            return res.status(404).json({ error: "error while writting file" });
        }
        return res.status(200).json({
            message: "user updated successfully",
        });
    });
};
exports.default = UserController;
