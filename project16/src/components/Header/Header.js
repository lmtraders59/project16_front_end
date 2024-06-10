import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import logo from "../images/cuckoo_clocks.png";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img src="/images/cuckoo_clocks.png" alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
