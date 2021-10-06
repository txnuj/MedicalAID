import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Aboutus from "../AboutUs/Aboutus";

export default function Header() {
  const [aboutUsActive, setAboutUsActive] = useState(false);

  const closeAboutHandler = () => {
    setAboutUsActive(false);
  };
  return (
    <React.Fragment>
      {aboutUsActive && <Aboutus onClickClose={closeAboutHandler} />}
      <div className="nav-container">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <div className="nav-title">
            <h2>Medicords</h2>
          </div>
        </Link>
        <ul className="links-container">
          <li
            className="link"
            onClick={() => {
              setAboutUsActive(true);
            }}
          >
            About us
          </li>
          <li className="link">Contact us</li>
        </ul>
      </div>
    </React.Fragment>
  );
}
