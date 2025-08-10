import { Application } from "express";
import { config } from "dotenv";

import productRoutes from "./routes/productRoutes";


const app: Application = require("express")();

app.use("/v1/api", productRoutes)

config()
app.listen(process.env.APP_PORT, () =>
	console.log(`Server running on port ${process.env.APP_PORT}`),
);
