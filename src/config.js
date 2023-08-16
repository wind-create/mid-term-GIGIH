import mongoose from "mongoose";
import development from "../config/development.json" assert { type: "json" };
import dotenv from "dotenv";

dotenv.config();

export const port = () => {
  return process.env.PORT || 8080;
};

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect to DB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
