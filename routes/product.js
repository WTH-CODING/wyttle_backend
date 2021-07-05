const express = require("express");
const router = express.Router();

const controller = require("../controllers/product");

const { verify } = require("../middlewares/verifyToken");

router.get("/", controller.getProducts);

router.put("/:id/review", verify, controller.createProductReview);
router.get("/:id/reviews", controller.getProductReviews);
router.delete("/:id/reviews", verify, controller.deleteReview);

module.exports = router;
