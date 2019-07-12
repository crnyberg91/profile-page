import React from "react";
import { CardDeck, Card, Button, Container } from "react-bootstrap";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';
import "./style.css";


const CardContainer = () => {
    return (
        <Container>
            <CardDeck>
                <MDBCol className="cardCol">
                    <MDBCard style={{ width: "18rem" }}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Friend Finder</MDBCardTitle>
                            <MDBCardText>
                                A social app where one fills out a questionare then be matched with the closest matched person.
          </MDBCardText>
                            <MDBBtn href="#" className="dusty-grass-gradient card-btn">Link</MDBBtn>
                            <MDBBtn href="#" className="dusty-grass-gradient card-btn"><MDBIcon fab icon="github"></MDBIcon></MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="cardCol">
                    <MDBCard style={{ width: "18rem" }}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
          </MDBCardText>
                            <MDBBtn href="#" className="dusty-grass-gradient card-btn">Link</MDBBtn>
                            <MDBBtn href="#" className="dusty-grass-gradient card-btn"><MDBIcon fab icon="github"></MDBIcon></MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="cardCol">
                    <MDBCard style={{ width: "18rem" }}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
          </MDBCardText>
                            <MDBBtn href="#" className="dusty-grass-gradient card-btn">Link</MDBBtn>
                            <MDBBtn href="#" className="dusty-grass-gradient card-btn"><MDBIcon fab icon="github"></MDBIcon></MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="cardCol">
                    <MDBCard style={{ width: "18rem" }}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
          </MDBCardText>
                            <MDBBtn href="#" className="dusty-grass-gradient card-btn">Link</MDBBtn>
                            <MDBBtn href="#" className="dusty-grass-gradient card-btn"><MDBIcon fab icon="github"></MDBIcon></MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </CardDeck>
        </Container>

    )
}

export default CardContainer;