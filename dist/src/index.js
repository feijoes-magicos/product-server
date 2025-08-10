"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const app = require("express")();
app.listen(process.env.APP_PORT, () => console.log(`App rodando na porta ${process.env.APP_PORT}`));
