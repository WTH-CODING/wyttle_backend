const express = require("express");
const router = express.Router();

const { verify } = require("../middlewares/verifyToken");

router.route("/products").get(getProducts);

router
  .route("/admin/product/new")
  .post(verify, authorizeRoles("admin"), newProduct);

router.route("/review").put(verify, createProductReview);
router.route("/reviews").get(verify, getProductReviews);
router.route("/reviews").delete(verify, deleteReview);

module.exports = router;
