import mongoose from "mongoose";
import { Course } from "../models/course.model.js";
import dotenv from "dotenv";

dotenv.config();

const listCourses = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log("MongoDB URI:", process.env.MONGO_URI);
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB successfully");

        const courses = await Course.find({});
        console.log(`Found ${courses.length} courses:`);
        
        courses.forEach((course, index) => {
            console.log(`\nCourse ${index + 1}:`);
            console.log("Title:", course.courseTitle);
            console.log("Category:", course.category);
            console.log("Level:", course.courseLevel);
            console.log("Creator:", course.creator);
            console.log("Published:", course.isPublished);
            console.log("------------------------");
        });

        await mongoose.connection.close();
        console.log("MongoDB connection closed");
    } catch (error) {
        console.error("Error listing courses:", error);
        process.exit(1);
    }
};

listCourses(); 