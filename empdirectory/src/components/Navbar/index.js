import React from "react";

import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>employee directory</h1>
    </nav>
  );
}

export default Navbar;
