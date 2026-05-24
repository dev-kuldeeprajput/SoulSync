const express = require("express");
const { userRegistration } = require("../controllers/authController");
const { verifyEmail } = require("../controllers/authController");
const { loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", userRegistration);
router.get("/verify-email", verifyEmail);
router.get("/login", loginUser);

module.exports = router;
