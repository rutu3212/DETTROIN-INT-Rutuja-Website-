// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";

// // ✅ Import Routes
// import admissionRoutes from "./routes/admissionRoutes.js";
// import contactRoutes from "./routes/contactRoutes.js";


// // (add other routes if needed)

// dotenv.config();

// const app = express();

// // ✅ Middleware
// app.use(express.json());

// // ✅ CORS FIX (VERY IMPORTANT)
// app.use(
//   cors({
//     origin: "http://localhost:5173", // 👉 change to 5173 if using Vite
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// // ✅ Routes
// app.use("/api/admissions", admissionRoutes);

// // ✅ Test Route
// app.get("/", (req, res) => {
//   res.send("🚀 API is running successfully...");
// });

// // ✅ Debug Route (optional - helps you test API)
// app.get("/test", (req, res) => {
//   res.json({ message: "Backend working perfectly ✅" });
// });

// // ❌ 404 Handler
// app.use((req, res) => {
//   res.status(404).json({ message: "Route not found ❌" });
// });

// // ❌ Error Handler (IMPORTANT)
// app.use((err, req, res, next) => {
//   console.error("❌ Server Error:", err.message);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// app.use("/api/contact", contactRoutes);

// // ✅ Start Server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });



import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// ✅ Import Routes
import admissionRoutes from "./routes/admissionRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// ==============================
// ✅ Middleware
// ==============================
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ==============================
// ✅ Routes (IMPORTANT: BEFORE 404)
// ==============================
app.use("/api/admissions", admissionRoutes);
app.use("/api/contact", contactRoutes); // ✅ FIXED POSITION

// ==============================
// ✅ Test Routes
// ==============================
app.get("/", (req, res) => {
  res.send("🚀 API is running successfully...");
});

app.get("/test", (req, res) => {
  res.json({ message: "Backend working perfectly ✅" });
});

// ==============================
// ❌ 404 Handler (ALWAYS LAST)
// ==============================
app.use((req, res) => {
  res.status(404).json({ message: "Route not found ❌" });
});

// ==============================
// ❌ Error Handler
// ==============================
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

// ==============================
// ✅ Start Server
// ==============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});