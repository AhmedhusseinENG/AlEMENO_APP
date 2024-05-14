import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">My Courses</Link> 

      </nav>
      <h1>Courses App</h1>
    </header>
  );
}

export default Header;
