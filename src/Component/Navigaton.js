import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  const [navExpanded, setNav] = useState(false);

  const setNavExpanded = expanded => {
    setNav(expanded);
  };
  const handleSelect = () => {
    setNav(false);
  };
  return (
    <header>
      <Navbar
        onToggle={setNavExpanded}
        expanded={navExpanded}
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Link className="navbar-brand" to="/space-x">
          Space X
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse onSelect={handleSelect} id="responsive-navbar-nav">
          <Nav onSelect={handleSelect}>
            <Link to="/launchpads">
              <Nav.Link as="span">Launchpads</Nav.Link>
            </Link>
            <Link to="/missions">
              <Nav.Link as="span">Missions</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Navigation;
