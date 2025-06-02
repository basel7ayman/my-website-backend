import mongoose from "mongoose";
import { Course } from "../models/course.model.js";
import dotenv from "dotenv";

dotenv.config();

const listLectures = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB successfully");

        const courses = await Course.find({}).populate('lectures');
        console.log(`Found ${courses.length} courses`);

        for (const course of courses) {
            console.log(`\nCourse: ${course.courseTitle}`);
            console.log(`Category: ${course.category}`);
            console.log(`Level: ${course.courseLevel}`);
            console.log(`Number of lectures: ${course.lectures.length}`);
            console.log("Lectures:");
            course.lectures.forEach((lecture, index) => {
                console.log(`${index + 1}. ${lecture.lectureTitle} (Preview: ${lecture.isPreviewFree ? 'Yes' : 'No'})`);
            });
            console.log("------------------------");
        }

        await mongoose.connection.close();
        console.log("\nMongoDB connection closed");
    } catch (error) {
        console.error("Error listing lectures:", error);
        process.exit(1);
    }
};

listLectures(); 