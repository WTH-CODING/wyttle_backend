var express = require("express");
var router = express.Router();

const { verify } = require("../middlewares/verifyToken");

const user = require("../controllers/user");

router.get("/", verify, user.getAllUsers);
router.get("/:id", verify, user.getUserById);
router.get("/email/:email", verify, user.getUserByEmail);
router.get("/count", verify, user.userCount);
router.put("/update", verify, user.updateUser);

module.exports = router;
