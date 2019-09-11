import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h6 className="title">Footer Content</h6>
            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
          </MDBCol>
          <MDBCol md="3" className="footer-group" >
            <h6 className="title footer-link">Home</h6>
            <ul>
              <li className="list-unstyled">
                <a href="#!">About 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Careers </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact</a>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol md="3"  className="footer-group">
            <h6 className="title">Categories</h6>
            <ul>
              <li className="list-unstyled">
                <a href="#!">About 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Careers </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact</a>
              </li>
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        Powernik Nigeria &copy; {new Date().getFullYear()} 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;