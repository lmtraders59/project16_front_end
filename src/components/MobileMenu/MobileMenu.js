import React from "react";

const MobileMenu = ({ isOpen, onClose }) => (
  <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
    <div className="close-button" onClick={onClose}>
      ×
    </div>
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#profile">Profile</a>
      </li>
      <li>
        <a href="#username">Username</a>
      </li>
    </ul>
  </div>
);

export default MobileMenu;
