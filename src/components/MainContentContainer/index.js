import React from "react";
import About from "../About";
import PortfolioCard from "../PortfolioCard";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import portfolio from "../../portfolio.json";


class MainContentContainer extends React.Component {
    state = {
        portfolio
    }
    render() {
        return (
            <Container>
                <Row>
                    <About />
                </Row>
                <Row>
                    {this.state.portfolio.map(project => (
                        <PortfolioCard
                            key={project.key}
                            name={project.name}
                            img={project.img}
                            deploy={project.deploy}
                            gitHub={project.gitHub}
                        />
                    ))}
                </Row>
            </Container>
        )
    }
}

export default MainContentContainer;