const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
    },
    thumbsUpCount: {
        type: Number,
        default: 0,
    },
    thumbsDownCount: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});



module.exports = mongoose.model("Review", reviewSchema);