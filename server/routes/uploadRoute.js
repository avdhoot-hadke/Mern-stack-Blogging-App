import express from "express";
import multer from "multer";

const router = express.Router();
//multer init
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

//Route
router.post("/", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

export default router;
