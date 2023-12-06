import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import PostModel from "../models/posts.js";

const router = express.Router();

//Get User
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).lean();
    const { password: userPassword, ...others } = user;

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(others);
  } catch (error) {
    console.error("Error while updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Update
router.put("/:id", async (req, res) => {
  const { username, email, password, profilePic } = req.body;

  // Check if the user is authorized to update
  if (req.body.id !== req.params.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    let updatedFields = {
      username,
      email,
      profilePic,
    };

    // Hash the password if provided
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedFields.password = hashedPassword;
    }

    // Update the user and get the updated document
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true } // Return the modified user
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error while updating user:", error);
    res.status(500).json({ message: error.message });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  // Check if the user is authorized to delete
  try {
    const id = req.params.id;
    const user = await User.findById(req.params.id);
    try {
      await PostModel.deleteMany({ username: user.username });

      const data = await User.findByIdAndDelete(id);
      if (!data) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error while deleting user:", error);
      res.status(500).json({ message: error.message });
    }
  } catch (error) {
    if (!user) {
      res.status(404).json("User not found");
    }
  }
});

export default router;
