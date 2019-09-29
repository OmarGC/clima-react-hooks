import React from "react";

// rcc React Class Component
// rafc React Arrow Function Component

const Navbar = ({title}) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">
          {title}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;