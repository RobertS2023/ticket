import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import Sidebar from "../components/sidebar";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar-section">
      <nav className="navbar">
        <button className="nav-btn" onClick={toggleSidebar}>
          <FaBars className="sidebar-toggle" />
        </button>
        <div className="nav-center">
          <div className="nav-header">
            <h3 className="logo">To my Love</h3>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/" exact activeClassName="active">
                Her
              </NavLink>
            </li>
            <li>
              <NavLink to="/reasons" activeClassName="active">
                Reasons
              </NavLink>
            </li>
            <li>
              <NavLink to="/montage" activeClassName="active">
                Montage
              </NavLink>
            </li>
            <li>
              <NavLink to="/moments" activeClassName="active">
                Moments
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        closeSidebar={closeSidebar}
      />
    </nav>
  );
};

export default Navbar;
