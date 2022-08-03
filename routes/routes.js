const express = require("express");
const router = express.Router();

// Imports
const signupController = require("../controllers/SignupController");
const loginController = require("../controllers/LoginController");
const cart = require("../controllers/cart");
const getcartdata = require("../controllers/getCartdata");
const cartdlelete = require("../controllers/cartDelete");
const payment = require("../controllers/stripe-payment");


// API's

// auth apis
router.post("/api/signup", signupController);
router.post("/api/login", loginController);

// add to cart apis
router.post("/api/cart", cart);
router.post("/api/get-cart:id", getcartdata);
router.delete("/api/delete-cart:id",cartdlelete);


// Stripe payment api

router.post("/api/payment",payment);


// Export
module.exports = router;