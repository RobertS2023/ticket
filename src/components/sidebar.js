import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar, closeSidebar }) => {
  useEffect(() => {
    window.addEventListener("scroll", closeSidebar);
    return () => {
      window.removeEventListener("scroll", closeSidebar);
    };
  }, [closeSidebar]);

  // Add new useEffect hook
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        closeSidebar();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, closeSidebar]);

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <IoMdClose /> : <FaBars />}
      </button>
      <ul className={`sidebar-nav ${isOpen ? "show-sidebar" : ""}`}>
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="active"
            onClick={toggleSidebar}
          >
            Her
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reasons"
            activeClassName="active"
            onClick={toggleSidebar}
          >
            Reasons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Montage"
            activeClassName="active"
            onClick={toggleSidebar}
          >
            Montage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Moments"
            activeClassName="active"
            onClick={toggleSidebar}
          >
            Moments
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
