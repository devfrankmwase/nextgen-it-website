// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Example: API route for contacts
// Make sure you have ./routes/contacts.js or define inline
// import contactRoutes from "./routes/contacts.js";
// app.use("/api/contacts", contactRoutes);

// Or inline example:
app.post("/api/contacts", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }
  console.log("Contact message received:", req.body);
  return res.status(200).json({ message: "Message sent successfully ✅" });
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend/build")));

// React Router fallback — must come AFTER all API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});