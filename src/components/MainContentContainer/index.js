import React from "react";
import About from "../About";
import PortfolioCard from "../PortfolioCard";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import portfolio from "../../portfolio.json";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import JumbotronPage from "../jumbotron";

const gridExamplesPage = () => {
  return (
    <MDBContainer>
        <JumbotronPage />
      <MDBRow>
        <MDBCol md="4"></MDBCol>
        <MDBCol md="4">Profile Page</MDBCol>
        <MDBCol md="4"></MDBCol>
      </MDBRow>
      <MDBRow>
          {/* about paragraph or jumbotron */}
      </MDBRow>
      <MDBRow>
          {/* about paragraph or jumbotron */}
      </MDBRow>
      <MDBRow>
          {/* portfolio */}
      </MDBRow>
    </MDBContainer>
    // footer
  );
}

export default gridExamplesPage;