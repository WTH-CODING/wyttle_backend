const mongoose = require("mongoose");

const thumbReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    review: {
        type: mongoose.Schema.ObjectId,
        ref: "Review",
        required: true,
    },
    vouteUp: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model("ThumbReview", thumbReviewSchema);