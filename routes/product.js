const express = require("express");
const router = express.Router();

const product = require("../controllers/product");

const { verify } = require("../middlewares/verifyToken");


router.get("/", product.getProducts);
router.get("/count", verify ,product.productCount);
router.get("/home", verify ,product.getHomeProducts);
router.get("/:id", verify ,product.getSingleProduct);
router.post("/", verify ,product.createProduct);
router.put("/", verify ,product.updateProduct);
router.delete("/:id", verify ,product.deleteProduct);

// router.put("/review/create", verify, controller.createProductReview);
// router.get("/reviews", controller.getProductReviews);
// router.delete("/review/delete/:id", verify, controller.deleteReview);


module.exports = router;
