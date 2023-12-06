import express from "express";
import User from "../models/user.js";
import CategoryModel from "../models/category.js";

const router = express.Router();

//Create
router.post("/", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "Name is required.",
    });
  }

  try {
    const createdCat = await CategoryModel.create({
      name,
    });

    res.status(200).json(createdCat);
  } catch (error) {
    console.error("Error while creating a Category:", error);

    res.status(500).json({
      message: "Failed to create a Category. Please try again later.",
    });
  }
});

//Get All
router.get("/", async (req, res) => {
  try {
    const categories = await CategoryModel.find({});

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error while getting categories:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
