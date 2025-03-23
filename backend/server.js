import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";
import connectionRoutes from "./routes/connection.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173",   // allows to send to cookie with response to the frontend
            credentials: true,
        })
    );
}

//limit is added to get saved from payload error(large images)
app.use(express.json({ limit: "5mb" })); // parse JSON request bodies
app.use(cookieParser());  //This middleware is part of the cookie-parser library, and it simplifies working with cookies by making them easily accessible in the req.cookies object.

// app.use(cors(
//     {
//         origin: "http://localhost:5173",
//         credentials: true,        // allows to send to cookie with response to the frontend
//     }
// ));


//v1 is used to control the version so that if a new version comes even then old version will work
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/connections", connectionRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
