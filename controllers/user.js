const User = require("../models/user");

exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .populate({
      path: "cart",
      populate: {
        path: "item",
        models: "Product",
      },
    }).populate({
      path: "wishlist",
      populate: {
        path: "item",
        models: "Product",
      },
    }).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          message: "No user was found in DB",
        });
      }
      res.json(user);
    });
};

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    console.log(err);
    if (err) {
      res.status(400).json({
        message: "error saving user in DB",
      });
    }
    res.json(user);
  });
};

exports.getUserByEmail = (req, res) => {
  User.find({ email: req.params.email }).exec((err, user) => {
    if (user.length === 0 || err) {
      return res.status(400).json({
        message: "No Phone Number is there.",
      });
    } else res.json(user);
  });
};

exports.getAllUsers = (req, res) => {
  User.find()
    .sort({ "createdAt": -1 }).populate({
      path: "cart",
      populate: {
        path: "item",
        models: "Product",
      },
    }).populate({
      path: "wishlist",
      populate: {
        path: "item",
        models: "Product",
      },
    })
    .exec((err, user) => {
      if (err) {
        res.status(400).json({
          message: "No USERS are found",
        });
      }
      res.json(user);
    });
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.body._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          message: "upadate failed",
        });
      }
      user.password = undefined;
      res.json(user);
    }
  );
};

exports.userCount = (req, res) => {
  User.collection.countDocuments({}, (err, usercount) => {
    if (err) {
      res.status(400).json({
        message: "user count error",
      });
    } else {
      res.json({
        usercount,
      });
    }
  });
};