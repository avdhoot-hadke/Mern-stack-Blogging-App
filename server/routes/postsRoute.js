import express from "express";
import User from "../models/user.js";
import PostModel from "../models/posts.js";
import Post from "../models/posts.js";

const router = express.Router();

//Create new Post
router.post("/", async (req, res) => {
  const { title, description, photo, username, categories } = req.body;

  if (!title || !description || !username) {
    return res.status(400).json({
      message: "Title, description, and username are required fields.",
    });
  }

  try {
    const createdPost = await PostModel.create({
      title,
      description,
      photo,
      username,
      categories,
    });

    res.status(201).json(createdPost);
  } catch (error) {
    console.error("Error while creating a post:", error);

    res
      .status(500)
      .json({ message: "Failed to create a post. Please try again later." });
  }
});

//Get All Post
router.get("/", async (req, res) => {
  //example-query :  http//localhost3000/posts?username=user21
  console.log("Received request:", req.url);
  const username = req.query.username;
  const category = req.query.category;
  try {
    let posts;
    if (username) {
      posts = await PostModel.find({ username }).lean();
    } else if (category) {
      posts = await PostModel.find({ categories: { $in: category } }).lean(); //if "category" is found in categories[] array
    } else {
      posts = await PostModel.find();
    }

    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error while updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id).lean();

    if (!post) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("Error while updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
//Update Post
router.put("/:id", async (req, res) => {
  const { title, description, photo, username, categories } = req.body;

  try {
    let updatedFields = {
      title,
      description,
      photo,
      username,
      categories,
    };

    // Update the post and get the updated document
    const updatedPost = await PostModel.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true } // Return the modified user
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error while updating user:", error);
    res.status(500).json({ message: error.message });
  }
});

//Delete Post
router.delete("/:id", async (req, res) => {
  try {
    const data = await PostModel.findOneAndDelete(req.params.id);

    if (data) {
      res.status(202).json("Post deleted."); // Send a 204 No Content response upon successful deletion
    }
  } catch (error) {
    console.error("Error while updating user:", error);
    res.status(500).json({ message: error.message });
  }
});
export default router;
