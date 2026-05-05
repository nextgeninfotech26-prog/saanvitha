import React from "react";

const Header = ({ togglePosition, onToggle, sidebarOpen }) => {
  return (
    <div className="bg-light d-flex align-items-center justify-content-between p-2 shadow-sm">
      {/* Toggle inside header if position is header */}
      {togglePosition === "header" && (
        <button className="btn btn-outline-primary me-2" onClick={onToggle}>
          {sidebarOpen ? "☰" : "☰"}
        </button>
      )}
      <h4 className="m-0">My App</h4>
      <div>User Info</div>
    </div>
  );
};

export default Header;
