const User = require("../models/user");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const resend = require("../config/resend");
const jwt = require("jsonwebtoken");

const userRegistration = async (req, res) => {
  const { fullName, username, email, password } = req.body;
  try {
    if (
      !fullName?.trim() ||
      !username?.trim() ||
      !email?.trim() ||
      !password?.trim()
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingEmail = await User.findOne({
      email,
    });

    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exist",
      });
    }

    const existingUsername = await User.findOne({
      username,
    });

    if (existingUsername) {
      return res.status(400).json({
        message: "username already exist",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10); //password hashed using bcrypt

    const verificationToken = crypto.randomBytes(32).toString("hex"); // verification token generation from crypto
    const verificationTokenExpiry = new Date(Date.now() + 15 * 60 * 1000);

    await User.create({
      fullName,
      username,
      email,
      passwordHash,
      verificationToken,
      verificationTokenExpiry,
      emailVerified: false,
    });

    const verificationLink =
      "http://localhost:5000/api/auth/verify-email?token=" + verificationToken;

    // Verification email send
    const emailresponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Account Verification",
      html: ` <h1>SoulSync</h1>
      <p>Verify your account </p>
      <p>Click below:</p>
      <a href = "${verificationLink}">Verify Account</a>
      <p>Expires in 15 minutes</p>`,
    });
    return res.status(201).json({
      message: "Registration Successfull",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//email verification function
const verifyEmail = async (req, res) => {
  const { token } = req.query;
  const user = await User.findOne({
    verificationToken: token,
  });

  if (user == null) {
    return res.status(400).json({
      message: "verification failed",
    });
  }
  if (user.verificationTokenExpiry <= Date.now()) {
    return res.status(400).json({
      message: "verification failed",
    });
  }

  user.emailVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpiry = undefined;

  await user.save();
  return res.status(200).json({
    message: "Email verified successfully",
  });
};

//login function

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email?.trim() || !password?.trim()) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const user = await User.findOne({ email });

  if (user == null) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);
  if (isPasswordCorrect == false) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  if (user.emailVerified == false) {
    return res.status(400).json({
      message: "Please verify your email first",
    });
  }

  const token = jwt.sign(
    {
      userId: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  return res.status(200).json({
    message: "Login successful",

    token,
  });
};

module.exports = {
  userRegistration,
  verifyEmail,
  loginUser,
};
