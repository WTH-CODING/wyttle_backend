const express = require("express");
const router = express.Router();

const {
  newOrder,
  getSingleOrder,
  myOrders,
} = require("../controllers/orderController");

const { verify } = require("../middlewares/verifyToken");

router.route("/order/new").post(verify, newOrder);

router.route("/order/:id").get(verify, getSingleOrder);
router.route("/orders/me").get(verify, myOrders);

module.exports = router;
