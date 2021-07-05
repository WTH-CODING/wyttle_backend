var express = require("express");
var router = express.Router();

const { verify } = require("../middlewares/verifyToken");

const routes = require("../controllers/user");

router.get("/", verify, routes.getAllUsers);
router.get("/user/:id", verify, routes.getUserById);
router.get("/email/:email", verify, routes.getUserByEmail);
router.get("/count", verify, routes.userCount);
router.put("/update", verify, routes.updateUser);

module.exports = router;
