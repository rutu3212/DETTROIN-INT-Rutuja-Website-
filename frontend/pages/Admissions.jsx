import { useState } from "react";
import axios from "axios";

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Submit to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admissions",
        formData
      );

      alert(res.data.message);

      // Clear form after submit
      setFormData({
        name: "",
        email: "",
        phone: "",
        class: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("❌ Error submitting application");
    }
  };

  return (
    <div className="bg-gray-50">

      {/* 🔷 Hero Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Admissions
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Join Kisaligarh School and begin your journey toward excellence.
        </p>
      </section>

      {/* 📋 Admission Info */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        
        {/* Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Admission Process
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Fill out the admission form</li>
            <li>Submit required documents</li>
            <li>Attend interaction / interview</li>
            <li>Confirm admission & fee payment</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-3">
            Required Documents
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Birth Certificate</li>
            <li>Previous School Report Card</li>
            <li>Passport Size Photos</li>
            <li>Address Proof</li>
          </ul>
        </div>

        {/* 📝 Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow space-y-4"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Apply Now
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-blue-500"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-blue-500"
            required
          />

          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          >
            <option value="">Select Class</option>
            <option>Nursery</option>
            <option>KG</option>
            <option>1st Grade</option>
            <option>2nd Grade</option>
            <option>3rd Grade</option>
            <option>4th Grade</option>
            <option>5th Grade</option>
            <option>6th Grade</option>
            <option>7th Grade</option>
            <option>8th Grade</option>
            <option>9th Grade</option>
            <option>10th Grade</option>
          </select>

          <textarea
            name="message"
            placeholder="Additional Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Submit Application
          </button>
        </form>

      </section>

    </div>
  );
}