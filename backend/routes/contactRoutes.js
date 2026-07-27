import express from "express";
import db from "../config/db.js";

const router = express.Router();

// ==============================
// ✅ TEST ROUTE (Check API working)
// ==============================
router.get("/test", (req, res) => {
  res.json({ message: "Contact route working ✅" });
});

// ==============================
// ✅ POST - Save Contact Message
// ==============================
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Insert Error:", err);
      return res.status(500).json({ message: "❌ Failed to save message" });
    }

    res.json({ message: "✅ Message saved successfully" });
  });
});

// ==============================
// ✅ GET - Fetch All Contact Messages
// ==============================
router.get("/", (req, res) => {
  db.query("SELECT * FROM contacts", (err, result) => {
    if (err) {
      console.error("Fetch Error:", err);
      return res.status(500).json({ message: "❌ Error fetching data" });
    }

    res.json(result);
  });
});

// ==============================
// ✅ EXPORT
// ==============================
export default router;