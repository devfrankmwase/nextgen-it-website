// backend/routes/messages.js
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Messages API is working ✅" });
});

export default router;