const express = require("express");
const router = express.Router();

const product = require("../controllers/product");

const { verify } = require("../middlewares/verifyToken");


router.get("/", product.getProducts);
router.get("/category/:id", product.getProductsByCategory);
// router.get("/count", verify ,product.productCount);
// router.get("/home", product.getHomeProducts);
// router.get("/:id", product.getSingleProduct);
// router.post("/", verify ,product.createProduct);
// router.post("/" ,product.createProduct);
// router.put("/", verify ,product.updateProduct);
// router.delete("/:id", verify ,product.deleteProduct);

router.get("/count", product.productCount);
router.get("/home", product.getHomeProducts);
router.get("/:id", product.getSingleProduct);
router.post("/", product.createProduct);
router.post("/" ,product.createProduct);
router.put("/", product.updateProduct);
router.delete("/:id", product.deleteProduct);


module.exports = router;
