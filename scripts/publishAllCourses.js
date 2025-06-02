import mongoose from "mongoose";
import { Course } from "../models/course.model.js";
import dotenv from "dotenv";

dotenv.config();

const publishAllCourses = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Find all courses and update their isPublished status to true
    const result = await Course.updateMany(
      { isPublished: false },
      { $set: { isPublished: true } }
    );

    console.log(`Successfully published ${result.modifiedCount} courses`);
    process.exit(0);
  } catch (error) {
    console.error("Error publishing courses:", error);
    process.exit(1);
  }
};

publishAllCourses(); 