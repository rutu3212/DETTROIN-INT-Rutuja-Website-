import express from "express";
import db from "../config/db.js"; // ✅ IMPORTANT
import { submitAdmission, getAdmissions } from "../controllers/admissionController.js";

const router = express.Router();

// ==============================
// ✅ POST - Submit Admission Form
// ==============================
router.post("/", submitAdmission);

// ==============================
// ✅ GET - Fetch All Admissions
// ==============================
router.get("/", getAdmissions);

// ==============================
// ✅ DELETE - Remove Admission
// ==============================
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM admissions WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Delete Error:", err);
      return res.status(500).json({ message: "❌ Delete failed" });
    }

    res.json({ message: "✅ Deleted successfully" });
  });
});

// ==============================
// ✅ EXPORT
// ==============================
export default router;