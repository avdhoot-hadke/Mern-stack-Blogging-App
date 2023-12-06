// connectDB.js
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to DB");
  } catch (error) {
    console.error(error.message);
  }
}

export default main;
