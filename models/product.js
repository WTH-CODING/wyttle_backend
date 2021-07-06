const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      max: 100,
    },
    price: {
      type: Number,
      default: 0.0,
    },
    description: {
      type: String,
    },
    ratings: {
      type: Number,
      default: 5.0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    imageurl:{
      type: String,
    },
    category: {
      type: String,
      enum: {
        values: [
          "Jerseys",
          "Equipments",
          "Safety Gears",
          "Training Equipments",
          "For Men",
          "For Women",
        ],
        message: "Please select correct category for product",
      },
    },
    stock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
