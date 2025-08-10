"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
router.get("/products", (_, res) => {
    res.send("TÁ FUNFANDO");
});
exports.default = router;
