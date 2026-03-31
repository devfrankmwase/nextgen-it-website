// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

// Import your routes
import messageRoutes from "./routes/messages.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());                 // Allow requests from frontend
app.use(express.json());          // Parse JSON bodies
app.use(express.static(path.join(__dirname, "frontend/build")));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// API Routes
app.use("/api/messages", messageRoutes);

// Serve React frontend in production
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));

  // All other requests serve the React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));