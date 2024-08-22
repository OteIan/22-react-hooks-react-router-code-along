// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/login", label: "Login" },
  { to: "/signup", label: "Sign Up"}
];

function NavBar() {
  return (
    <div>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

export default NavBar;
