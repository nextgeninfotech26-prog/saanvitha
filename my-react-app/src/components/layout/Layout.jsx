import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ togglePosition = "header", children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggle = () => setSidebarOpen(prev => !prev);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} togglePosition={togglePosition} onToggle={handleToggle} />

      {/* Main content */}
      <div className="flex-grow-1">
        <Header togglePosition={togglePosition} onToggle={handleToggle} sidebarOpen={sidebarOpen} />
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
