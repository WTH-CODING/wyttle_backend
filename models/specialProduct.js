const mongoose = require("mongoose");

const specialProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      max: 100,
    },
    price: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
    },
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("SpecialProduct", specialProductSchema);
