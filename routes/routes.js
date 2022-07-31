const express = require("express");
const router = express.Router();

// Imports
const signupController = require("../controllers/SignupController");
const loginController = require("../controllers/LoginController");


// API's
router.post("/api/signup", signupController);
router.post("/api/login", loginController);


// Export
module.exports = router;