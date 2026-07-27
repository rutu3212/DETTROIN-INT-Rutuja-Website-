import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  // 🔐 Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  // 📡 Fetch admissions on load
  useEffect(() => {
    fetchAdmissions();
  }, []);

  // 📡 GET DATA
  const fetchAdmissions = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admissions");

      console.log("API DATA:", res.data);

      if (Array.isArray(res.data)) {
        setStudents(res.data);
      } else {
        setStudents([]);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("❌ Failed to fetch data");
    }
  };

  // 🗑️ DELETE FUNCTION
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admissions/${id}`);
      alert("✅ Deleted successfully");
      fetchAdmissions(); // refresh table
    } catch (error) {
      console.error("Delete Error:", error);
      alert("❌ Failed to delete");
    }
  };

  return (
    <div className="dashboard">

      {/* 🔷 Header */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {/* 🔷 Stats Cards */}
      <div className="dashboard-content">
        <div className="card">
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div className="card">
          <h3>Courses</h3>
          <p>35</p>
        </div>

        <div className="card">
          <h3>Teachers</h3>
          <p>80</p>
        </div>
      </div>

      {/* 📊 Students Table */}
      <div className="table-container">
        <h2>Admission Applications</h2>

        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Class</th>
              <th>Message</th>
              <th>Action</th> {/* ✅ NEW COLUMN */}
            </tr>
          </thead>

          <tbody>
            {students && students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student["class"]}</td>
                  <td>{student.message}</td>

                  {/* 🔴 DELETE BUTTON */}
                  <td>
                    <button
                      onClick={() => deleteStudent(student.id)}
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No admissions found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Dashboard;