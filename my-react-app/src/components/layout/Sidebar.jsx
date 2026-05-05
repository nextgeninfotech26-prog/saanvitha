import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, togglePosition, onToggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token and navigate to login
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className={`bg-dark text-white position-relative`}
      style={{
        width: isOpen ? "250px" : "60px",
        transition: "width 0.3s",
        minHeight: "100vh",
      }}
    >
      {/* Toggle inside sidebar if position is sidebar */}
      {togglePosition === "sidebar" && (
        <button
          className="btn btn-sm btn-light position-absolute top-0 end-0 m-2"
          onClick={onToggle}
        >
          ☰
        </button>
      )}

      <ul className="list-unstyled mt-5 p-2">
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Settings</li>
        <li>
          <button 
            onClick={handleLogout}
            className="btn btn-link text-white p-0"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
