"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const app = require("express")();
app.use("/v1/api", productRoutes_1.default);
(0, dotenv_1.config)();
app.listen(process.env.APP_PORT, () => console.log(`Server running on port ${process.env.APP_PORT}`));
