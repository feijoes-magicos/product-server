import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";
import { ControllerModule } from "../types";

const client = new PrismaClient();
const findAll:RequestHandler = async (_, res) => {
	try {
		const products = await client.product.findMany();
		res.send(JSON.stringify({ resources: { products: products } }));
	} catch (error) { 
		res.send(JSON.stringify({message:"Erro no servidor"}))
	}
}

const productController:ControllerModule = {findAll}
module.exports = productController
