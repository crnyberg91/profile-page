import React from "react";
// import {Link} from "react-router-dom";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBIcon
} from "mdbreact";
import "./style.css";

class NavbarPage extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar dark expand="md" className="dusty-grass-gradient navBar fixed-top">
                <MDBNavbarBrand>
                    <strong className="black-text title">Chris Nyberg</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>

                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a className="navLink" href="https://www.linkedin.com/in/christopher-nyberg-099350115/" target="_blank"><MDBIcon fab icon="linkedin" ></MDBIcon></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="navLink" href="https://github.com/crnyberg91" target="_blank"><MDBIcon fab icon="github"></MDBIcon></a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavbarPage;