const express = require("express");
const { userRegistration } = require("../controllers/authController");
const { verifyEmail } = require("../controllers/authController");

const router = express.Router();

router.post("/register", userRegistration);
router.get("/verify-email", verifyEmail);

module.exports = router;
