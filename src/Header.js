import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
    return (
      <Navbar id='navigation' bg="secondary" variant="dark">
        <Navbar.Brand>
          <img src='logo.png' id='brand' alt='Rememo logo' />
        </Navbar.Brand>
        <Nav>
          <Nav.Link>Features</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
      </Navbar>
    )
}
