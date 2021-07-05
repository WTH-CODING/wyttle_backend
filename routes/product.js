const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/product");

const { verify } = require("../middlewares/verifyToken");

router.get("/products", getProducts);

router.put("/review", verify, createProductReview);
router.get("/reviews", getProductReviews);
router.delete("/reviews", verify, deleteReview);

module.exports = router;
