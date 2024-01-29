const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = async (req, res, next) => {
  console.log(req.body);

  try {
    const newUser = await User.create(req.body);

    console.log(req.body);
    console.log(newUser);

    createSendToken(newUser, 201, res);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        status: "error",
        message: "Please provide a email and password",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "Email ID not registered !!",
      });
    }

    const correct = await user.correctPassword(password, user.password);

    if (!user || !correct) {
      res.status(401).json({
        status: "error",
        message: "Incorrect email or password",
      });
    }

    createSendToken(user, 200, res);
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies) {
    token = req.cookies.jwt;
  }

  if (!token) {
    res.status(401).json({
      status: "error",
      message: "You are not logged in ! Please log in to get access.",
    });
  } else {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      res.status(400).json({
        status: "error",
        message: "The user belonging to the token no longer exists!",
      });
    }

    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  }
};
