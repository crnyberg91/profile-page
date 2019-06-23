import React from "react";
import About from "../About";
import PortfolioCard from "../PortfolioCard";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class MainContentContainer extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <About />
                </Row>
                <Row>
                    <PortfolioCard />
                </Row>
            </Container>
        )
    }
}

export default MainContentContainer;