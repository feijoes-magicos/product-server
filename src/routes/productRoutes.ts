import { IRouter } from "express";

const router: IRouter = require("express").Router();

router.get("/products", (_, res) => {
	res.send("TÁ FUNFANDO");
});

export default router
