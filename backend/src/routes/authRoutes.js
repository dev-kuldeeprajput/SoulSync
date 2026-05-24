const express = require("express");
const { UserRegistration } = require("../controllers/authController");

const router = express.Router();

router.post("/register", UserRegistration);

module.exports = router;
