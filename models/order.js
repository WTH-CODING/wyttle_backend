const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    shippingInfo: {
      address: {
        type: String,
      },
      phoneNo: {
        type: String,
        required: true,
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        count: Number,
      }
    ],
    isPaid: {
      type: Boolean,
      default: false,
    },
    transactionId: {
      type: String,
    },
    itemsPrice: {
      type: Number,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      default: 0.0,
    },
    orderStatus: {
      type: String,
      default: "Processing",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
