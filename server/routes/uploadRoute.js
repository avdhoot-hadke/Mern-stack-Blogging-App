import express from "express";
import multer from "multer";
import fs from "fs/promises"; // Import the 'fs' module with promises

const router = express.Router();
//multer init
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});
var upload = multer({ storage: storage });

//Route
router.post("/", upload.single("file"), (req, res) => {
  const fileName = req.file.filename;
  // You can include additional logic here to process the filename if needed
  res.status(200).json({ message: "File has been uploaded", fileName });
});

//GPT
router.delete("/:filename", async (req, res) => {
  const { filename } = req.params;

  try {
    // Construct the full path to the file
    const filePath = `images/${filename}`;

    // Check if the file exists
    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (fileExists) {
      // If the file exists, delete it
      await fs.unlink(filePath);
      res.status(200).json({ message: "File has been deleted" });
    } else {
      // If the file does not exist, send an appropriate response
      res.status(404).json({ message: "File not found" });
    }
  } catch (error) {
    console.error("Error while deleting file:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
