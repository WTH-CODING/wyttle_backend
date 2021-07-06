// const Product = require("../models/product");
// const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
// const APIFeatures = require("../utils/apiFeatures");

// // Get all products   =>   /api/v1/products?keyword=apple
// exports.getProducts = catchAsyncErrors(async (req, res, next) => {
//   const resPerPage = 4;
//   const productsCount = await Product.countDocuments();

//   const apiFeatures = new APIFeatures(Product.find(), req.query)
//     .search()
//     .filter();

//   let products = await apiFeatures.query;
//   let filteredProductsCount = products.length;

//   apiFeatures.pagination(resPerPage);
//   products = await apiFeatures.query;

//   res.status(200).json({
//     success: true,
//     productsCount,
//     resPerPage,
//     filteredProductsCount,
//     products,
//   });
// });

// // Get single product details   =>   /api/v1/product/:id
// exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);

//   res.status(200).json({
//     success: true,
//     product,
//   });
// });

// // Create new review   =>   /api/v1/review
// exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
//   const { rating, description, title, productId } = req.body;

//   const review = {
//     user: req.user._id,
//     title,
//     rating: Number(rating),
//     description: req.user.description,
//   };

//   const product = await Product.findById(productId);

//   const isReviewed = product.reviews.find(
//     (r) => r.user.toString() === req.user._id.toString()
//   );

//   if (isReviewed) {
//     product.reviews.forEach((review) => {
//       if (review.user.toString() === req.user._id.toString()) {
//         review.description = description;
//         review.rating = rating;
//       }
//     });
//   } else {
//     product.reviews.push(review);
//     product.numOfReviews = product.reviews.length;
//   }

//   product.ratings =
//     product.reviews.reduce((acc, item) => item.rating + acc, 0) /
//     product.reviews.length;

//   await product.save({ validateBeforeSave: false });
//   await User.findById(req.user._id, (err, foundUser) => {
//     if (err) {
//       console.log(err);
//     } else {
//       foundUser.numOfCoins = foundUser.numOfCoins + 1;
//     }
//   });

//   res.status(200).json({
//     success: true,
//   });
// });

// // Get Product Reviews   =>   /api/v1/reviews
// exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
//   const product = await Product.findById(req.query.id);

//   res.status(200).json({
//     success: true,
//     reviews: product.reviews,
//   });
// });
