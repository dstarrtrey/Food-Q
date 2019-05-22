import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        food Q
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Login"
              className={window.location.pathname === "/Login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/OwnerList"
              className={window.location.pathname === "/OwnerList" ? "nav-link active" : "nav-link"}
            >
              OwnerList
            </Link>
            
          </li>
          <li className="nav-item">
            <Link
              to="/Menu"
              className={window.location.pathname === "/Menu" ? "nav-link active" : "nav-link"}
            >
              Menu
            </Link>
            
          </li>
          <li className="nav-item">
            <Link
              to="/ClientList"
              className={window.location.pathname === "/ClientList" ? "nav-link active" : "nav-link"}
            >
              ClientList
            </Link>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
