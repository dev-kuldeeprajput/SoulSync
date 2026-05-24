const User = require("../models/user");
const bcrypt = require("bcrypt");

const UserRegistration = async (req, res) => {
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
    console.log("2 Email checked");

    const existingUsername = await User.findOne({
      username,
    });

    if (existingUsername) {
      return res.status(400).json({
        message: "username already exist",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10); //password hashed using bcrypt

    await User.create({
      fullName,
      username,
      email,
      passwordHash,
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
module.exports = {
  UserRegistration,
};
