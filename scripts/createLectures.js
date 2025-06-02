import mongoose from "mongoose";
import { Course } from "../models/course.model.js";
import { Lecture } from "../models/lecture.model.js";
import dotenv from "dotenv";

dotenv.config();

const getLecturesForCourse = (course) => {
    const lectures = [];
    const { courseTitle, category, courseLevel } = course;
    
    // Common lectures for all courses
    lectures.push({
        lectureTitle: "Introduction to the Course",
        isPreviewFree: true
    });
    
    lectures.push({
        lectureTitle: "Course Overview and Learning Objectives",
        isPreviewFree: true
    });

    // Category-specific lectures
    switch(category) {
        case "JavaScript":
            lectures.push(
                { lectureTitle: "JavaScript Basics and Syntax", isPreviewFree: true },
                { lectureTitle: "Variables and Data Types" },
                { lectureTitle: "Control Flow and Loops" },
                { lectureTitle: "Functions and Scope" },
                { lectureTitle: "Arrays and Objects" },
                { lectureTitle: "DOM Manipulation" },
                { lectureTitle: "Event Handling" },
                { lectureTitle: "Asynchronous JavaScript" }
            );
            if (courseLevel === "Advance") {
                lectures.push(
                    { lectureTitle: "Advanced JavaScript Patterns" },
                    { lectureTitle: "Performance Optimization" }
                );
            }
            break;

        case "Next.js":
            lectures.push(
                { lectureTitle: "Next.js Setup and Installation", isPreviewFree: true },
                { lectureTitle: "Pages and Routing" },
                { lectureTitle: "Data Fetching Methods" },
                { lectureTitle: "Static and Dynamic Rendering" },
                { lectureTitle: "API Routes" },
                { lectureTitle: "Authentication" },
                { lectureTitle: "Deployment" }
            );
            if (courseLevel === "Advance") {
                lectures.push(
                    { lectureTitle: "Advanced Next.js Features" },
                    { lectureTitle: "Performance Optimization" }
                );
            }
            break;

        case "MERN Stack":
            lectures.push(
                { lectureTitle: "MERN Stack Overview", isPreviewFree: true },
                { lectureTitle: "MongoDB Basics" },
                { lectureTitle: "Express.js Setup" },
                { lectureTitle: "React Components" },
                { lectureTitle: "Node.js Backend" },
                { lectureTitle: "API Integration" },
                { lectureTitle: "Authentication" },
                { lectureTitle: "Deployment" }
            );
            if (courseLevel === "Advance") {
                lectures.push(
                    { lectureTitle: "Advanced MERN Patterns" },
                    { lectureTitle: "Scaling Applications" }
                );
            }
            break;

        case "Frontend Development":
            lectures.push(
                { lectureTitle: "HTML5 Fundamentals", isPreviewFree: true },
                { lectureTitle: "CSS3 Styling" },
                { lectureTitle: "Responsive Design" },
                { lectureTitle: "JavaScript Basics" },
                { lectureTitle: "React Components" },
                { lectureTitle: "State Management" },
                { lectureTitle: "Routing" }
            );
            if (courseLevel === "Advance") {
                lectures.push(
                    { lectureTitle: "Advanced Frontend Patterns" },
                    { lectureTitle: "Performance Optimization" }
                );
            }
            break;

        case "Python":
            lectures.push(
                { lectureTitle: "Python Setup and Basics", isPreviewFree: true },
                { lectureTitle: "Variables and Data Types" },
                { lectureTitle: "Control Flow" },
                { lectureTitle: "Functions and Modules" },
                { lectureTitle: "Object-Oriented Programming" },
                { lectureTitle: "File Handling" },
                { lectureTitle: "Error Handling" }
            );
            if (courseLevel === "Advance") {
                lectures.push(
                    { lectureTitle: "Advanced Python Concepts" },
                    { lectureTitle: "Performance Optimization" }
                );
            }
            break;

        case "Data Science":
            lectures.push(
                { lectureTitle: "Introduction to Data Science", isPreviewFree: true },
                { lectureTitle: "Python for Data Science" },
                { lectureTitle: "Data Analysis with Pandas" },
                { lectureTitle: "Data Visualization" },
                { lectureTitle: "Statistical Analysis" },
                { lectureTitle: "Machine Learning Basics" },
                { lectureTitle: "Data Preprocessing" }
            );
            if (courseLevel === "Advance") {
                lectures.push(
                    { lectureTitle: "Advanced Machine Learning" },
                    { lectureTitle: "Deep Learning" }
                );
            }
            break;

        case "Backend Development":
            lectures.push(
                { lectureTitle: "Backend Development Basics", isPreviewFree: true },
                { lectureTitle: "Node.js Fundamentals" },
                { lectureTitle: "Express.js Setup" },
                { lectureTitle: "Database Integration" },
                { lectureTitle: "API Design" },
                { lectureTitle: "Authentication" },
                { lectureTitle: "Error Handling" }
            );
            if (courseLevel === "Advance") {
                lectures.push(
                    { lectureTitle: "Advanced Backend Patterns" },
                    { lectureTitle: "Microservices Architecture" }
                );
            }
            break;

        case "Docker":
            lectures.push(
                { lectureTitle: "Docker Introduction", isPreviewFree: true },
                { lectureTitle: "Docker Installation" },
                { lectureTitle: "Docker Images" },
                { lectureTitle: "Docker Containers" },
                { lectureTitle: "Docker Compose" },
                { lectureTitle: "Docker Networking" },
                { lectureTitle: "Docker Volumes" }
            );
            if (courseLevel === "Advance") {
                lectures.push(
                    { lectureTitle: "Advanced Docker Concepts" },
                    { lectureTitle: "Docker Security" }
                );
            }
            break;

        case "MongoDB":
            lectures.push(
                { lectureTitle: "MongoDB Introduction", isPreviewFree: true },
                { lectureTitle: "MongoDB Installation" },
                { lectureTitle: "CRUD Operations" },
                { lectureTitle: "Data Modeling" },
                { lectureTitle: "Indexing" },
                { lectureTitle: "Aggregation" },
                { lectureTitle: "Performance Tuning" }
            );
            if (courseLevel === "Advance") {
                lectures.push(
                    { lectureTitle: "Advanced MongoDB Features" },
                    { lectureTitle: "MongoDB Security" }
                );
            }
            break;

        case "HTML":
            lectures.push(
                { lectureTitle: "HTML Introduction", isPreviewFree: true },
                { lectureTitle: "HTML Structure" },
                { lectureTitle: "HTML Elements" },
                { lectureTitle: "Forms and Input" },
                { lectureTitle: "Semantic HTML" },
                { lectureTitle: "HTML5 Features" },
                { lectureTitle: "Accessibility" }
            );
            if (courseLevel === "Advance") {
                lectures.push(
                    { lectureTitle: "Advanced HTML Features" },
                    { lectureTitle: "HTML Best Practices" }
                );
            }
            break;

        case "Flutter":
            lectures.push(
                { lectureTitle: "Flutter Introduction", isPreviewFree: true },
                { lectureTitle: "Flutter Setup" },
                { lectureTitle: "Widgets" },
                { lectureTitle: "State Management" },
                { lectureTitle: "Navigation" },
                { lectureTitle: "API Integration" },
                { lectureTitle: "Local Storage" }
            );
            if (courseLevel === "Advance") {
                lectures.push(
                    { lectureTitle: "Advanced Flutter Features" },
                    { lectureTitle: "Flutter Performance" }
                );
            }
            break;

        default:
            // Generic lectures for other categories
            lectures.push(
                { lectureTitle: "Getting Started", isPreviewFree: true },
                { lectureTitle: "Core Concepts" },
                { lectureTitle: "Practical Examples" },
                { lectureTitle: "Best Practices" },
                { lectureTitle: "Advanced Topics" }
            );
    }

    return lectures;
};

const createLectures = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log("MongoDB URI:", process.env.MONGO_URI);
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB successfully");

        const courses = await Course.find({});
        console.log(`Found ${courses.length} courses`);

        if (courses.length === 0) {
            console.log("No courses found in the database. Please create courses first.");
            process.exit(1);
        }

        for (const course of courses) {
            console.log(`\nCreating lectures for course: ${course.courseTitle}`);
            const lectures = getLecturesForCourse(course);
            
            try {
                // Create lectures
                const createdLectures = await Lecture.insertMany(lectures);
                console.log(`Created ${createdLectures.length} lectures`);

                // Update course with lecture IDs
                await Course.findByIdAndUpdate(course._id, {
                    $push: { lectures: { $each: createdLectures.map(l => l._id) } }
                });
                console.log("Updated course with lecture IDs");
            } catch (error) {
                console.error(`Error creating lectures for course ${course.courseTitle}:`, error);
                continue; // Continue with next course even if this one fails
            }
        }

        console.log("\nAll lectures created successfully!");
        await mongoose.connection.close();
        console.log("MongoDB connection closed");
    } catch (error) {
        console.error("Error in createLectures:", error);
        process.exit(1);
    }
};

createLectures(); 