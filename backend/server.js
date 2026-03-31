import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Message from "./models/Message.js"; // ensure this is exported correctly

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());


// CONNECT TO MONGO
mongoose.connect("mongodb://127.0.0.1:27017/nextgenit", {
  // no need for useNewUrlParser or useUnifiedTopology in Mongoose 7+
})
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ROUTE TO SAVE CONTACT MESSAGE
app.post("/api/contacts", async (req, res) => {
  console.log("🔥 Request received");
  console.log("📦 Body:", req.body);

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log("❌ Missing fields");
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ FIX: make sure model works
    const newMessage = new Message({
      name,
      email,
      message,
    });

    console.log("💾 Saving...");
    await newMessage.save();

    console.log("✅ Saved");

    res.status(201).json({ message: "Saved successfully" });

  } catch (error) {
    console.error("🔥 ERROR:", error.message); // 👈 THIS IS KEY
    res.status(500).json({ error: error.message });
  }
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});