import { RequestHandler } from "express";
import { ControllerModule } from "../types";
import { ProductServices } from "../services/productServices";

const services: ProductServices = require("../services/productServices");

const findAll: RequestHandler = async (req, res) => {
	const { query } = req;
	const cursor =
		typeof query.cursor === "string" ? parseInt(query.cursor) : null;

	try {
		const products = await services.findByCursor(cursor);
		res.send(JSON.stringify({ resources: { products: products } }));
	} catch (error) {
		res.send(JSON.stringify({ message: "Erro no servidor" }));
	}
};

const productController: ControllerModule = { findAll };
module.exports = productController;
