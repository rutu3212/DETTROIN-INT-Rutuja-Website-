import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  // ❌ Not logged in → go to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in → show dashboard
  return children;
}

export default ProtectedRoute;