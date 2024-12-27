import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Check if accessToken exists in localStorage
  const token = localStorage.getItem("accessToken");  
  // If there's no accessToken, redirect to the login page
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  // Otherwise, allow the child route to render
  return <Outlet />;
};

export default ProtectedRoute;