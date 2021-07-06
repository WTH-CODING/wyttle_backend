const express = require("express");
const router = express.Router();

const review = require("../controllers/review");

const { verify } = require("../middlewares/verifyToken");

router.post("/", verify, review.createReview);
router.post("/thumb/update/:id", verify, review.updateThumbReview);
router.get("/thumb/:id", verify, review.getThumbReview);
router.get("/:id", verify, review.getReviewById);
router.get("/", verify, review.getAllReviews);
router.get("/count", verify, review.reviewCount);
router.get("/user/:id", verify, review.getReviewByUserId);
router.get("/product/:id", verify, review.getReviewByproductId);


module.exports = router;