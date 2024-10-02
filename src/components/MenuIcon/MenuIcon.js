import React from "react";

const MenuIcon = ({ onClick }) => (
  <div className="menu-icon" onClick={onClick}>
    &#9776; {/* This is the HTML entity for a menu-like icon */}
  </div>
);

export default MenuIcon;
