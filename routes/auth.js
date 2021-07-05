const express = require("express");
const router = express.Router();

const routes = require("../controllers/auth");

router.post("/signup", routes.register);
router.post("/signin", routes.login);
router.post("/logout", routes.logout);

module.exports = router;
