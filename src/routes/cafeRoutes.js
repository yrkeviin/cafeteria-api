const express = require("express");
const router = express.Router();
const cafeController = require("../controllers/cafeController");

router.get("/menu", cafeController.totalCafes);
router.post("/order", cafeController.addCafe);
router.get("/order/:id", cafeController.buscarCafePorId);
router.delete("/order/:id", cafeController.deletarCafe);

module.exports = router;