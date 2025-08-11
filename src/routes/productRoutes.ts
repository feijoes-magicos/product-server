import { IRouter } from "express";
import { ControllerModule } from "../types";

const router: IRouter = require("express").Router();

const productController:ControllerModule = require("../controllers/productControllers")

router.get("/products", productController.findAll);

export default router;
