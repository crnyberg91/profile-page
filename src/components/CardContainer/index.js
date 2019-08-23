import React from "react";
import { CardDeck, Card, Button, Container } from "react-bootstrap";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';
import "./style.css";


const CardContainer = () => {
    return (
        <Container className="cardRow">
            <CardDeck>
                <MDBCol className="cardCol">
                    <MDBCard style={{ width: "18rem" }}>
                        <MDBCardImage className="img-fluid" src="./assets/images/nibbleNeighbor.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Nibble Neighbor</MDBCardTitle>
                            <MDBCardText>
                            A recipe search app where a user can create an account and save recipes found.
                                
          </MDBCardText>
                            <MDBBtn href="https://nibbleneighbor.herokuapp.com/" target='_blank' className="dusty-grass-gradient card-btn link-btn">Link</MDBBtn>
                            <MDBBtn href="https://github.com/crnyberg91/NibbleNeighbor" target='_blank' className="dusty-grass-gradient card-btn git-btn"><MDBIcon fab icon="github"></MDBIcon></MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="cardCol">
                    <MDBCard style={{ width: "18rem" }}>
                        <MDBCardImage className="img-fluid" src="./assets/images/vitruvio.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Vitruv.io</MDBCardTitle>
                            <MDBCardText>
                            A “webMD”-esque website where the user can search by symptoms to find a possible diagnosis.
          </MDBCardText>
                            <MDBBtn href="https://vitruvio-project.herokuapp.com/" target='_blank' className="dusty-grass-gradient card-btn link-btn">Link</MDBBtn>
                            <MDBBtn href="https://github.com/crnyberg91/Vitruv.io" target='_blank' className="dusty-grass-gradient card-btn git-btn"><MDBIcon fab icon="github"></MDBIcon></MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="cardCol">
                    <MDBCard style={{ width: "18rem" }}>
                        <MDBCardImage className="img-fluid" src="./assets/images/friendFinder.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Friend Finder</MDBCardTitle>
                            <MDBCardText>
                            A social app where one fills out a questionare then be matched with the closest matched person.
          </MDBCardText>
                            <MDBBtn href="https://friend-finder-nyberg.herokuapp.com/" target='_blank' className="dusty-grass-gradient card-btn link-btn">Link</MDBBtn>
                            <MDBBtn href="https://github.com/crnyberg91/friend-finder" target='_blank' className="dusty-grass-gradient card-btn git-btn"><MDBIcon fab icon="github"></MDBIcon></MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </CardDeck>
        </Container>
    )
}

export default CardContainer;