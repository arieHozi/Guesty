"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("./", (req, res) => {
    res.send("helloo world");
});
app.listen(4000, () => {
    console.log("server is connected on port 4000");
});
