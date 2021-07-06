const Product = require("../models/product");
const Review = require("../models/review");
const Thumb = require("../models/thumbReview");
const User = require("../models/user");

exports.getReviewById = (req, res) => {
    Review.findById(req.params.id).exec((err, review) => {
        if (err || !review) {
            return res.status(400).json({
                message: "No Review was found in DB",
            });
        }
        res.json(review);
    });
};

exports.createReview = (req, res) => {
    const review = new Review(req.body);
    review.save((err, rev) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                message: "error review user in DB",
            });
        } else {
            Product.findById(rev.product).exec((err, product) => {
                product.rating = (product.ratings + review.rating) / (product.numOfReviews + 1);
                product.numOfReviews += 1;
                product.save();
            });
            User.findById(req.body.user).exec((err, user) => {
                user.numOfCoins += 10;
                user.save();
            });
            res.json(rev);
        }
    });
};

exports.getReviewByproductId = (req, res) => {
    Review.find({ product: req.params.id }).exec((err, review) => {
        if (err) {
            return res.status(400).json({
                message: "No revieew found",
            });
        } else res.json(review);
    });
};

exports.getReviewByUserId = (req, res) => {
    Review.find({ user: req.params.id }).exec((err, review) => {
        if (err) {
            return res.status(400).json({
                message: "No revieew found",
            });
        } else res.json(review);
    });
};

exports.getAllReviews = (req, res) => {
    Review.find()
        .sort({ "createdAt": -1 })
        .exec((err, review) => {
            if (err) {
                res.status(400).json({
                    message: "No reviews are found",
                });
            }
            res.json(review);
        });
};

exports.updateThumbReview = (req, res) => {
    Review.findById(req.params.id).exec((err, review) => {
        const thumb = new Thumb(req.body);
        if (req.body.vouteUp) {
            review.thumbsUpCount++;
            thumb.save();
            User.findById(req.body.user).exec((err, user) => {
                user.numOfCoins += 5;
                user.save();
            });
        } else {
            review.thumbsDownCount++;
            thumb.save();
            User.findById(req.body.user).exec((err, user) => {
                user.numOfCoins += 5;
                user.save();
            });
        }
    });
    res.json("succes");
};

exports.getThumbReview = (req, res) => {
    Thumb.find({ review: req.params.id }).exec((err, reviews) => {
        if (err) {
            res.status(400).json({
                message: "review thumnb error",
            });
        } else {
            res.json(
                reviews
            );
        }
    });
}

exports.reviewCount = (req, res) => {
    Review.collection.countDocuments({}, (err, count) => {
        if (err) {
            res.status(400).json({
                message: "review count error",
            });
        } else {
            res.json({
                count,
            });
        }
    });
};