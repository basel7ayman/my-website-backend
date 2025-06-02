import mongoose from "mongoose";
import { Course } from "../models/course.model.js";
import { User } from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

const courses = [
    // JavaScript Track
    {
        courseTitle: "JavaScript Fundamentals",
        subTitle: "Learn the basics of JavaScript programming",
        description: "A comprehensive introduction to JavaScript for beginners.",
        category: "JavaScript",
        courseLevel: "Beginner",
        coursePrice: 49.99,
        courseThumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Advanced JavaScript Patterns",
        subTitle: "Master advanced JavaScript concepts and design patterns",
        description: "Deep dive into advanced JavaScript patterns and best practices.",
        category: "JavaScript",
        courseLevel: "Advanced",
        coursePrice: 79.99,
        courseThumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Modern JavaScript ES6+",
        subTitle: "Explore modern JavaScript features and syntax",
        description: "Learn the latest JavaScript features and how to use them effectively.",
        category: "JavaScript",
        courseLevel: "Medium",
        coursePrice: 59.99,
        courseThumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },

    // Next.js Track
    {
        courseTitle: "Next.js for Beginners",
        subTitle: "Build modern web applications with Next.js",
        description: "A beginner-friendly guide to building web apps with Next.js.",
        category: "Next.js",
        courseLevel: "Beginner",
        coursePrice: 69.99,
        courseThumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        isPublished: true
    },
    {
        courseTitle: "Advanced Next.js",
        subTitle: "Master advanced Next.js concepts and deployment",
        description: "Learn advanced Next.js features and how to deploy your applications.",
        category: "Next.js",
        courseLevel: "Advanced",
        coursePrice: 89.99,
        courseThumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        isPublished: true
    },
    {
        courseTitle: "Next.js with TypeScript",
        subTitle: "Build type-safe applications with Next.js and TypeScript",
        description: "Learn how to use TypeScript with Next.js for better type safety.",
        category: "Next.js",
        courseLevel: "Medium",
        coursePrice: 79.99,
        courseThumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        isPublished: true
    },

    // MERN Stack Track
    {
        courseTitle: "MERN Stack Development",
        subTitle: "Build full-stack applications with MongoDB, Express, React, and Node.js",
        description: "A comprehensive guide to building full-stack applications with the MERN stack.",
        category: "MERN Stack",
        courseLevel: "Advanced",
        coursePrice: 99.99,
        courseThumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        isPublished: true
    },
    {
        courseTitle: "MERN Stack for Beginners",
        subTitle: "Learn the basics of MERN stack development",
        description: "A beginner-friendly introduction to the MERN stack.",
        category: "MERN Stack",
        courseLevel: "Beginner",
        coursePrice: 69.99,
        courseThumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        isPublished: true
    },
    {
        courseTitle: "MERN Stack with Authentication",
        subTitle: "Add user authentication to your MERN stack applications",
        description: "Learn how to implement user authentication in your MERN stack applications.",
        category: "MERN Stack",
        courseLevel: "Medium",
        coursePrice: 79.99,
        courseThumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        isPublished: true
    },

    // Frontend Development Track
    {
        courseTitle: "Frontend Development with React",
        subTitle: "Build modern user interfaces with React",
        description: "A comprehensive guide to building modern UIs with React.",
        category: "Frontend Development",
        courseLevel: "Beginner",
        coursePrice: 59.99,
        courseThumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Advanced React Patterns",
        subTitle: "Master advanced React patterns and best practices",
        description: "Learn advanced React patterns and how to use them effectively.",
        category: "Frontend Development",
        courseLevel: "Advanced",
        coursePrice: 89.99,
        courseThumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "React with Redux",
        subTitle: "Manage state in your React applications with Redux",
        description: "Learn how to use Redux for state management in your React applications.",
        category: "Frontend Development",
        courseLevel: "Medium",
        coursePrice: 69.99,
        courseThumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },

    // Fullstack Development Track
    {
        courseTitle: "Fullstack Development with Node.js",
        subTitle: "Build full-stack applications with Node.js and Express",
        description: "A comprehensive guide to building full-stack applications with Node.js and Express.",
        category: "Fullstack Development",
        courseLevel: "Advanced",
        coursePrice: 99.99,
        courseThumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Node.js for Beginners",
        subTitle: "Learn the basics of Node.js and Express",
        description: "A beginner-friendly introduction to Node.js and Express.",
        category: "Fullstack Development",
        courseLevel: "Beginner",
        coursePrice: 59.99,
        courseThumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Node.js with MongoDB",
        subTitle: "Build applications with Node.js and MongoDB",
        description: "Learn how to use MongoDB with Node.js for data storage.",
        category: "Fullstack Development",
        courseLevel: "Medium",
        coursePrice: 79.99,
        courseThumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },

    // React Native Track
    {
        courseTitle: "React Native for Beginners",
        subTitle: "Build mobile applications with React Native",
        description: "A beginner-friendly guide to building mobile apps with React Native.",
        category: "React Native",
        courseLevel: "Beginner",
        coursePrice: 69.99,
        courseThumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Advanced React Native",
        subTitle: "Master advanced React Native concepts and deployment",
        description: "Learn advanced React Native features and how to deploy your applications.",
        category: "React Native",
        courseLevel: "Advanced",
        coursePrice: 89.99,
        courseThumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "React Native with Firebase",
        subTitle: "Add backend functionality to your React Native apps with Firebase",
        description: "Learn how to use Firebase with React Native for backend functionality.",
        category: "React Native",
        courseLevel: "Medium",
        coursePrice: 79.99,
        courseThumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },

    // Python Track
    {
        courseTitle: "Python for Beginners",
        subTitle: "Learn the basics of Python programming",
        description: "A comprehensive introduction to Python for beginners.",
        category: "Python",
        courseLevel: "Beginner",
        coursePrice: 49.99,
        courseThumbnail: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Advanced Python",
        subTitle: "Master advanced Python concepts and libraries",
        description: "Deep dive into advanced Python concepts and popular libraries.",
        category: "Python",
        courseLevel: "Advanced",
        coursePrice: 79.99,
        courseThumbnail: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Python with Data Science",
        subTitle: "Learn data science with Python",
        description: "A comprehensive guide to data science using Python.",
        category: "Python",
        courseLevel: "Medium",
        coursePrice: 69.99,
        courseThumbnail: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },

    // Data Science Track
    {
        courseTitle: "Data Science Fundamentals",
        subTitle: "Learn the basics of data science",
        description: "A beginner-friendly introduction to data science concepts and tools.",
        category: "Data Science",
        courseLevel: "Beginner",
        coursePrice: 59.99,
        courseThumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Advanced Data Science",
        subTitle: "Master advanced data science techniques and machine learning",
        description: "Deep dive into advanced data science techniques and machine learning algorithms.",
        category: "Data Science",
        courseLevel: "Advanced",
        coursePrice: 99.99,
        courseThumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Data Science with Python",
        subTitle: "Learn data science using Python and popular libraries",
        description: "A comprehensive guide to data science using Python and popular libraries.",
        category: "Data Science",
        courseLevel: "Medium",
        coursePrice: 79.99,
        courseThumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },

    // Backend Development Track
    {
        courseTitle: "Backend Development with Node.js",
        subTitle: "Build robust backend applications with Node.js",
        description: "A comprehensive guide to building backend applications with Node.js.",
        category: "Backend Development",
        courseLevel: "Advanced",
        coursePrice: 89.99,
        courseThumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        isPublished: true
    },
    {
        courseTitle: "Node.js for Beginners",
        subTitle: "Learn the basics of Node.js and Express",
        description: "A beginner-friendly introduction to Node.js and Express.",
        category: "Backend Development",
        courseLevel: "Beginner",
        coursePrice: 59.99,
        courseThumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        isPublished: true
    },
    {
        courseTitle: "Node.js with MongoDB",
        subTitle: "Build applications with Node.js and MongoDB",
        description: "Learn how to use MongoDB with Node.js for data storage.",
        category: "Backend Development",
        courseLevel: "Medium",
        coursePrice: 79.99,
        courseThumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        isPublished: true
    },

    // Docker Track
    {
        courseTitle: "Docker for Beginners",
        subTitle: "Learn the basics of Docker and containerization",
        description: "A beginner-friendly introduction to Docker and containerization.",
        category: "Docker",
        courseLevel: "Beginner",
        coursePrice: 49.99,
        courseThumbnail: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Advanced Docker",
        subTitle: "Master advanced Docker concepts and deployment",
        description: "Learn advanced Docker features and how to deploy your applications.",
        category: "Docker",
        courseLevel: "Advanced",
        coursePrice: 79.99,
        courseThumbnail: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Docker with Kubernetes",
        subTitle: "Learn how to use Docker with Kubernetes for orchestration",
        description: "A comprehensive guide to using Docker with Kubernetes for container orchestration.",
        category: "Docker",
        courseLevel: "Medium",
        coursePrice: 69.99,
        courseThumbnail: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },

    // MongoDB Track
    {
        courseTitle: "MongoDB for Beginners",
        subTitle: "Learn the basics of MongoDB and NoSQL databases",
        description: "A beginner-friendly introduction to MongoDB and NoSQL databases.",
        category: "MongoDB",
        courseLevel: "Beginner",
        coursePrice: 49.99,
        courseThumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Advanced MongoDB",
        subTitle: "Master advanced MongoDB concepts and optimization",
        description: "Learn advanced MongoDB features and how to optimize your database.",
        category: "MongoDB",
        courseLevel: "Advanced",
        coursePrice: 79.99,
        courseThumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "MongoDB with Node.js",
        subTitle: "Build applications with MongoDB and Node.js",
        description: "Learn how to use MongoDB with Node.js for data storage.",
        category: "MongoDB",
        courseLevel: "Medium",
        coursePrice: 69.99,
        courseThumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },

    // HTML Track
    {
        courseTitle: "HTML for Beginners",
        subTitle: "Learn the basics of HTML and web development",
        description: "A beginner-friendly introduction to HTML and web development.",
        category: "HTML",
        courseLevel: "Beginner",
        coursePrice: 39.99,
        courseThumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        isPublished: true
    },
    {
        courseTitle: "Advanced HTML",
        subTitle: "Master advanced HTML concepts and best practices",
        description: "Learn advanced HTML features and best practices for web development.",
        category: "HTML",
        courseLevel: "Advanced",
        coursePrice: 59.99,
        courseThumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        isPublished: true
    },
    {
        courseTitle: "HTML with CSS",
        subTitle: "Learn how to style your HTML with CSS",
        description: "A comprehensive guide to styling HTML with CSS.",
        category: "HTML",
        courseLevel: "Medium",
        coursePrice: 49.99,
        courseThumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        isPublished: true
    },

    // Flutter Track
    {
        courseTitle: "Flutter for Beginners",
        subTitle: "Learn the basics of Flutter and mobile app development",
        description: "A beginner-friendly introduction to Flutter and mobile app development.",
        category: "Flutter",
        courseLevel: "Beginner",
        coursePrice: 69.99,
        courseThumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Advanced Flutter",
        subTitle: "Master advanced Flutter concepts and deployment",
        description: "Learn advanced Flutter features and how to deploy your applications.",
        category: "Flutter",
        courseLevel: "Advanced",
        coursePrice: 89.99,
        courseThumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    },
    {
        courseTitle: "Flutter with Firebase",
        subTitle: "Add backend functionality to your Flutter apps with Firebase",
        description: "Learn how to use Firebase with Flutter for backend functionality.",
        category: "Flutter",
        courseLevel: "Medium",
        coursePrice: 79.99,
        courseThumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isPublished: true
    }
];

const createCourses = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        // Find the specific instructor
        const instructor = await User.findOne({ email: "basel.elsa3di@gmail.com" });
        if (!instructor) {
            console.error("Instructor account not found. Please check the email address.");
            process.exit(1);
        }

        console.log(`Found instructor: ${instructor.name}`);

        // Update all courses to include the creator
        const coursesWithCreator = courses.map(course => ({
            ...course,
            creator: instructor._id,
            // Fix courseLevel to match schema enum
            courseLevel: course.courseLevel === "Advanced" ? "Advance" : course.courseLevel
        }));

        const result = await Course.insertMany(coursesWithCreator);
        console.log(`Successfully created ${result.length} courses`);
        process.exit(0);
    } catch (error) {
        console.error("Error creating courses:", error);
        process.exit(1);
    }
};

createCourses(); 