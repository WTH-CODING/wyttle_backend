const express = require("express");
const router = express.Router();

const {
  newOrder,
  getSingleOrder,
  myOrders,
} = require("../controllers/orderController");

const { verify } = require("../middlewares/verifyToken");

router.post("/order/new", verify, newOrder);
router.get("/order/:id", verify, getSingleOrder);
router.get("/orders/me", verify, myOrders);

module.exports = router;
