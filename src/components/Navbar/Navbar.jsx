import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar-wrapper">
            <div className="logo-wrapper">
                <h1>Sumit</h1>
            </div>
            <div className="links-wrapper">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
