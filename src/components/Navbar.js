import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, 
 MDBIcon } from "mdbreact";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar color="blue" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Powernik</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem >
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
       
         
          
        </MDBNavbarNav>
        <MDBNavbarNav right>
          
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
            <span id ="hr-span">Welcome HR Manager </span>
            <MDBIcon icon="user-alt" />
            </MDBNavLink>
          </MDBNavItem>
          
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default Navbar;