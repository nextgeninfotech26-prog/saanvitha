// // PublicRoute.js
// import React from "react";
// import { Navigate } from "react-router-dom";

// const PublicRoute = ({ children }) => {
//   const token = localStorage.getItem("token"); 
//   if (token) {
//     return <Navigate to="/dashboard" replace />; // redirect logged-in user
//   }
//   return children;
// };

// export default PublicRoute;


// import React from "react";

// const PublicRoute = ({ children }) => {
//   // We do not redirect users based on token
//   // Token is just stored for API calls
//   return children;
// };

// export default PublicRoute;


import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    // Invalidate the old token, regardless of expiration
    localStorage.removeItem("token");

    // Redirect to dashboard if you want after login, but here just force login again
    // return <Navigate to="/dashboard" replace />;
  }

  return children; // allow login/register
};

export default PublicRoute;
