import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Cool-site</div>
      <div>
        <ul className="links">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
