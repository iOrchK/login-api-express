var express = require("express");
var router = express.Router();
var UserController = require("../controllers/users");
var md_auth = require("../middlewares/authenticated");

// Login
router.post("/login", UserController.logIn);

// Register
router.post("/register", UserController.register);

// Register
router.post("/logout", UserController.logOut);

module.exports = router;
