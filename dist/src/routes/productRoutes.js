"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const productController = require("../controllers/productControllers");
router.get("/products", productController.findAll);
exports.default = router;
