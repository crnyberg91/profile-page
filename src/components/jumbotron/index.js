import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import './style.css';

const JumbotronPage = () => {
  return (
    <MDBContainer fluid className="jumbotron">
      <MDBRow>
        <MDBCol>
          <MDBCol className="text-black text-center fluid" id="box">
            <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Chris Nyberg's Portfolio Page</MDBCardTitle>
            <p className="mx-5 mb-5">I am a full-stack web developer located in Atlanta Georgia.</p>
            <MDBBtn target='_blank' href="assets/c-nyberg-resume.pdf" className="mb-5 dusty-grass-gradient"><MDBIcon icon="clone" className="mr-2"></MDBIcon> Resume</MDBBtn>
            {/* <a onClick="#cardRow"><MDBBtn className="mb-5 dusty-grass-gradient"><MDBIcon icon="clone" className="mr-2"></MDBIcon> Projects</MDBBtn></a> */}
            {/* <MDBBtn className="mb-5 dusty-grass-gradient"><MDBIcon icon="clone" className="mr-2"></MDBIcon> Contacts</MDBBtn> */}
          </MDBCol>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;
{/* <h1>Chris Nyberg</h1>
<i>Full Stack Web Developer</i> */}