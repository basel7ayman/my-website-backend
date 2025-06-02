import mongoose from "mongoose";
import { Course } from "../models/course.model.js";
import dotenv from "dotenv";

dotenv.config();

const listPublishedCourses = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const courses = await Course.find({ isPublished: true });
    console.log("Published Courses:");
    courses.forEach((course, idx) => {
      console.log(`${idx + 1}. ${course.courseTitle} | Category: ${course.category} | Published: ${course.isPublished}`);
    });
    if (courses.length === 0) {
      console.log("No published courses found.");
    }
    process.exit(0);
  } catch (error) {
    console.error("Error fetching published courses:", error);
    process.exit(1);
  }
};

listPublishedCourses(); 