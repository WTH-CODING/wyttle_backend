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
      default: 0,
    },
    feedbacks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Feedback" }],
    images: [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
    category: {
      type: String,
      enum: {
        values: [
          "Jerseys,",
          "Equipments",
          "Safety Gears",
          "Training Equipments",
          "For Men",
          "For Women",
        ],
        message: "Please select correct category for product",
      },
    },
    seller: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
