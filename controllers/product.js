const Product = require("../models/product");


exports.getProducts = (req, res) => {
    Product.find().sort([["name", "asc"]]).exec((err, items) => {
        if (err) {
            res.status(400).json({
                error: "error getting items from DB",
            });
        }
        res.json(items);
    });
};

exports.getSingleProduct = (req, res) => {
    Product.findById(req.params.id)
        .exec((err, item) => {
            if (err) {
                return res.status(400).json({
                    error: "item not found",
                });
            }
            res.json(item);
        });
};

exports.createProduct = (req, res) => {
    const product = new Product(req.body);
    product.save((err, item) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                error: "error saving item in DB",
            });
        }
        res.json(item);
    });
};

exports.deleteProduct = (req, res) => {
    Product.deleteOne({ "_id": req.params.id }, (err, itemdeleted) => {
        if (err) {
            res.status(400).json({
                error: "error deleting item in DB",
            });
        }
        res.json({
            message: "Deleted",
            itemdeleted,
        });
    });
};

exports.updateProduct = (req, res) => {
    Product.updateOne(
        { _id: req.body._id },
        { $set: req.body },
        (err, itemUpdated) => {
            if (err) {
                res.status(400).json({
                    error: "error updating item in DB",
                });
            }
            res.json({
                message: "Updated",
                itemUpdated,
            });
        }
    );
};

exports.createProductReview = async (req, res) => {
    const { rating, description, title, productId } = req.body;

    const review = {
        user: req.user._id,
        title,
        rating: Number(rating),
        description: req.user.description,
    };

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
        product.reviews.forEach((review) => {
            if (review.user.toString() === req.user._id.toString()) {
                review.description = description;
                review.rating = rating;
            }
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    product.ratings =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

    await product.save({ validateBeforeSave: false });
    await User.findById(req.user._id, (err, foundUser) => {
        if (err) {
            console.log(err);
        } else {
            foundUser.numOfCoins = foundUser.numOfCoins + 1;
        }
    });

    res.status(200).json({
        success: true,
    });
};

// Get Product Reviews   =>   /api/v1/reviews
exports.getProductReviews = async (req, res) => {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    });
};
