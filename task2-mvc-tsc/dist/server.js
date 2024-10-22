"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = (0, express_1.default)();
const port = 3001;
// middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routes middleware
app.use('/api/v1', user_route_1.default);
app.listen(port, () => {
    console.log(`server is running on port ${port} using typescript + node + express`);
});
