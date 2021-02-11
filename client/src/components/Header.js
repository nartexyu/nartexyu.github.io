import React from 'react'
import { Navbar, Nav, Link } from 'react-bootstrap'

export default function Header() {
    return (
        <div className="p-4">
            <Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand className="ml-5">Nathaniel Yu</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                        <Nav.Link className="pl-4 pr-4" href="#about">About</Nav.Link>
                        <Nav.Link className="pl-4 pr-4" href="#projects">Projects</Nav.Link>
                    </Nav>
                    <Nav className="mr-5">
                        <Nav.Link href="https://drive.google.com/file/d/1j8F1acV9SWmRvO1MP69zyu2MdVWmDHFJ/view?usp=sharing" target="_blank">
                        Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
