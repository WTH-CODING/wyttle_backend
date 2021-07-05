const express = require("express");
const router = express.Router();

const controller = require("../controllers/order");

const { verify } = require("../middlewares/verifyToken");

router.post("/new", verify, controller.newOrder);
router.get("/:id", verify, controller.getSingleOrder);
router.get("/me", verify, controller.myOrders);

module.exports = router;
