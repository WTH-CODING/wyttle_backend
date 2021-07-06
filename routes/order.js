const express = require("express");
const router = express.Router();

const order = require("../controllers/order");

const { verify } = require("../middlewares/verifyToken");

router.post("/", verify, order.createOrder);
router.put("/", verify, order.updatetOrder);
router.get("/:id", verify, order.getOrderById);
router.get("/", verify, order.getAllOrder);
router.get("/count", verify, order.orderCount);
router.get("/user/:id", verify, order.getAllOrderByUserId);


module.exports = router;