const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  count: String,
})

var userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 64,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    cart: {
      type: [CartSchema],
      default: () => ([]),
    },
    phone: {
      type: String,
      trim: true,
    },
    isverified: {
      type: Boolean,
      default: false,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
    photoUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/sambitraze/image/upload/v1622954053/dummy_gk6oij.png",
    },
    numOfCoins: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema, "users");
