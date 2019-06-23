import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";


class TopBar extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Col className="col-1">
                </Col>
                <Col className="col-2">
                <Navbar.Brand href="#home">Chris Nyberg</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Col>
                <Col>
                </Col>
                <Col className="col">
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#">Portfolio</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Col>
            </Navbar>
        )
    }
}

export default TopBar;