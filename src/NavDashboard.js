import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <Navbar id='navigation' bg="secondary" variant="dark">
        <Navbar.Brand href='/user'>
        <img src='logo.png' id='brand' alt='Rememo logo' />
        </Navbar.Brand>
        <Nav>
          <Nav.Link><Link to={'/user/dashboard'}>Home</Link></Nav.Link>
          <Nav.Link><Link to={'/'}>Log Out</Link></Nav.Link>
        </Nav>
      </Navbar>
    )
}