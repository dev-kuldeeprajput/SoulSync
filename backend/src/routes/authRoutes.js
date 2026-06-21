const express = require("express");
const { userRegistration } = require("../controllers/authController");
const { verifyEmail } = require("../controllers/authController");
const { loginUser } = require("../controllers/authController");
const { getProfile } = require("../controllers/authController");
const { verifyJWT } = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/register", userRegistration);
router.get("/verify-email", verifyEmail);
router.post("/login", loginUser);
router.get("/profile", verifyJWT, getProfile);

module.exports = router;
