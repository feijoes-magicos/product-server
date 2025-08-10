import { Application } from "express";

require("dotenv").config();


const app: Application = require("express")();

app.listen(process.env.APP_PORT, () =>
	console.log(`Server running on port ${process.env.APP_PORT}`),
);
