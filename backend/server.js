// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

// ------------------------
// Fix __dirname for ES modules
// ------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------------------
// Load environment variables
// ------------------------
dotenv.config();

// ------------------------
// Import routes
// ------------------------
import messageRoutes from "./routes/messages.js";

// ------------------------
// Initialize Express app
// ------------------------
const app = express();

// ------------------------
// Middleware
// ------------------------
app.use(cors());
app.use(express.json());

// ------------------------
// MongoDB connection
// ------------------------
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/nextgen-it";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ------------------------
// API Routes
// ------------------------
app.use("/api/messages", messageRoutes);

// ------------------------
// Serve React frontend
// ------------------------
app.use(express.static(path.join(__dirname, "../frontend/build")));

// For all other routes, serve React's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// ------------------------
// Start server
// ------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));