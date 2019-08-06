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
                            <MDBCardTitle>NibbleNeighbor</MDBCardTitle>
                            <MDBCardText>
                                A recipe search app where a user can create an account and save recipes found.
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
                            <MDBCardTitle>clicky game</MDBCardTitle>
                            <MDBCardText>
                                A memory game built in react.
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
                            <MDBCardTitle>store-front</MDBCardTitle>
                            <MDBCardText>
                                A fake store's website where the user can make pretend purchases.
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