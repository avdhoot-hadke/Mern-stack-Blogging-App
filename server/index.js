import express from "express";
import "dotenv/config";
import cors from "cors";
import main from "./connectDB.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postsRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
import path from "path"; // Import the 'path' module
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Middlewares
main();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

//routes
app.get("/", function (req, res) {
  res.send("Server started...");
});
app.use("/api/auth", authRoute);
app.use("/user", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);
app.use("/upload", uploadRoute);
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
