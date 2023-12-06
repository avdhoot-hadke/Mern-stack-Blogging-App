import express from "express";
import "dotenv/config";
import cors from "cors";
import main from "./connectDB.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postsRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import uploadRoute from "./routes/uploadRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
main();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //multer init
// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// var upload = multer({ storage: storage });

// app.post("/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded");
// });

//routes
app.get("/", function (req, res) {
  res.send("Hello");
});

app.use("/api/auth", authRoute);
app.use("/user", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);
app.use("/upload", uploadRoute);
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
