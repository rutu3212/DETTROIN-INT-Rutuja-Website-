import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footbar";

import Home from "../pages/Home";
import About from "../pages/About";
import Admissions from "../pages/Admissions";
import Contact from "../pages/Contact";
import Academics from "../pages/Academics";
import Gallery from "../pages/Gallary";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

import ProtectedRoute from "../component/ProtectedRoute";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Main Content */}
        <div className="content">
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Route */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* 404 Page */}
            <Route
              path="*"
              element={<h2 style={{ textAlign: "center" }}>Page Not Found ❌</h2>}
            />

          </Routes>
        </div>

        {/* ✅ Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;