const Product = require("../models/product");


exports.getProducts = (req, res) => {
    Product.find().sort([["createdAt", "desc"]]).exec((err, items) => {
        if (err) {
            res.status(400).json({
                error: "error getting items from DB",
            });
        }
        res.json(items);
    });
};

exports.getProductsByCategory = (req, res) => {
    Product.find({ category: req.params.id }).sort([["createdAt", "desc"]]).exec((err, items) => {
        if (err) {
            res.status(400).json({
                error: "error getting items from DB",
            });
        }
        res.json(items);
    });
};

exports.getHomeProducts = (req, res) => {
    Product.find().sort([["createdAt", "desc"]]).limit(10).exec((err, items) => {
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

exports.productCount = (req, res) => {
    Product.collection.countDocuments({}, (err, count) => {
        if (err) {
            res.status(400).json({
                message: "prod count error",
            });
        } else {
            res.json({
                count,
            });
        }
    });
};