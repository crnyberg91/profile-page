import React from "react";
import "./style.css";
import { Navbar, Container } from "react-bootstrap";

function Footer() {
    return (
        <Navbar expand="lg" variant="light" bg="light" sticky="bottom" className="dusty-grass-gradient footer">
            <Container>
                <Navbar.Brand href="#"></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer;