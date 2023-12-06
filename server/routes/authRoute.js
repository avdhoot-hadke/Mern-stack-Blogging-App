import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { username, email, password, profilePic } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      username,
      email,
      password: hashedPassword,
      profilePic,
    });
    res.status(200).json(createdUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }).lean();

    if (user) {
      const { password: userPassword, ...others } = user;
      const result = await bcrypt.compare(password, userPassword);

      if (result) {
        res.status(200).json(others);
      } else {
        res.status(400).send("Wrong credentials");
      }
    } else {
      res.status(400).send("Wrong credentials");
    }
  } catch (error) {
    console.error("Error while finding user or comparing passwords:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
