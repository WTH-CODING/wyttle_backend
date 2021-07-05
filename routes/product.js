const express = require("express");
const router = express.Router();

const controller = require("../controllers/product");

const { verify } = require("../middlewares/verifyToken");

router.get("/products", controller.getProducts);

router.put("/review", verify, controller.createProductReview);
router.get("/reviews", controller.getProductReviews);
router.delete("/reviews", verify, controller.deleteReview);

module.exports = router;
