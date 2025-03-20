import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome! Use the links below to navigate:</p>
      <nav>
        <ul>
          <li><NavLink to="/page/1">Page One</NavLink></li>
          <li><NavLink to="/page/2">Page Two</NavLink></li>
          <li><NavLink to="/page/3">Page Three</NavLink></li>
          <li><NavLink to="/page/4">Page Four</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
