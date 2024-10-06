import React from "react";

const MobileMenu = ({ isOpen, onClose }) => (
  <>
    {isOpen && <div className="modal-overlay" onClick={onClose}></div>}
    <div className={`mobile-menu ${isOpen ? "mobile-menu_visible" : ""}`}>
      <div className="close-button" onClick={onClose}>
        ×
      </div>
      <ul>
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#profile">Profile</a>
        </li>
        {/* <li>
          <p className="mobile-username">Username</p>
        </li> */}
      </ul>
    </div>
  </>
);

export default MobileMenu;
