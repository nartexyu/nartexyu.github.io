import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Footer() {
    return (
        <Navbar sticky="bottom">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="ml-auto mr-auto">
                <Nav.Link className="pl-4 pr-4" href="https://github.com/nartexyu">Github</Nav.Link>
                <Nav.Link className="pl-4 pr-4" href="https://www.linkedin.com/in/nathaniel-yu/">LinkedIn</Nav.Link>
                <Nav.Link className="pl-4 pr-4" href="https://www.instagram.com/nathanielxyu/">Instagram</Nav.Link>
            </Nav>
        </Navbar>
    )
}
