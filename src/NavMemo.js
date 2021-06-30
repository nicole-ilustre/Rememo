import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function NavMemo() {
    return (
        <Navbar id='navigation' bg="secondary" variant="dark">
          <Navbar.Brand>
            <img src='logo.png' id='brand' alt='Rememo logo' />
          </Navbar.Brand>
      </Navbar>
    )
}