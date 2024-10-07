const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.jwt_secret);
    req.body.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).send({ success: false, message: "Invalid token" });
  }
};

const express = require('express'); // Example middleware using Express

devServer: {
  setupMiddlewares: (middlewares, devServer) => {
    // Custom middleware to run before the default ones
    middlewares.unshift((req, res, next) => {
      console.log('Custom middleware before the default ones');
      next(); // Call next to continue to the next middleware
    });

    // You can also push a middleware to run after the default ones
    middlewares.push((req, res, next) => {
      console.log('Custom middleware after the default ones');
      // Modify response or perform actions
      next(); // Call next to continue to the next middleware
    });

    return middlewares;
  }
}
