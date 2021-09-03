import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <h2>Medicords</h2>
      </div>
      <ul className="links-container">
        <li className="link">About us</li>
        <li className="link">Contact us</li>
      </ul>
    </div>
  );
}
