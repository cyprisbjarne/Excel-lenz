import React, { useState } from "react";
import "../styles/sidebar.css";
import {
  FaTachometerAlt,
  FaChartLine,
  FaWallet,
  FaCogs,
  FaBars,
} from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar ${open ? "open" : "collapsed"}`}>
      {/* HEADER */}
      <div className="sidebar-header">
        <h2 className="sidebar-logo">{open ? "Excellenz" : "EX"}</h2>

        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
      </div>

      {/* ITEMS */}
      <div className="sidebar-item">
        <FaTachometerAlt />
        {open && <span>Dashboard</span>}
      </div>

      <div className="sidebar-item">
        <FaChartLine />
        {open && <span>Umsatz</span>}
      </div>

      <div className="sidebar-item">
        <FaWallet />
        {open && <span>Finanzen</span>}
      </div>

      <div className="sidebar-item">
        <FaCogs />
        {open && <span>Einstellungen</span>}
      </div>
    </div>
  );
}