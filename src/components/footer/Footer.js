import React from "react";
import footerimg from "../../assets/images/Bottom11.png";
import { Container, Nav } from "react-bootstrap";
import Logo from "../../assets/images/LOGO 1.png"
import vector from "../../assets/images/Vectorfooter.svg";
import homeIcon from "../../assets/images/svg.homeIcon.svg";
import livemint from "../../assets/images/livemint-logo-v.svg";
import { ReactSVG } from "react-svg";
import "./footer.scss";

export const Footer = () => {
  return (
    <>
    <div className="position-relative">
      <div className="footer_img">
      <img src={footerimg} className="img-fluid footer_girls_img" />
      <div className="footerbg">
        <div className="text-center pt-5 pb-3">
        <img src={Logo} className="img-fluid" />
        </div>
        <Nav className="justify-content-center footer_links" activeKey="/home">
           <Nav.Link href="/home">HOME</Nav.Link>            
            <span className="footer_right_border"></span>
           <Nav.Link eventKey="link-1">About</Nav.Link>
            <span className="footer_right_border"></span>
           <Nav.Link eventKey="link-2">Mint</Nav.Link>
            <span className="footer_right_border"></span>
           <Nav.Link eventKey="link-3">Traits</Nav.Link>
            <span className="footer_right_border"></span>
           <Nav.Link eventKey="link-4">Roadmap</Nav.Link>
            <span className="footer_right_border"></span>
           <Nav.Link eventKey="link-5">Community</Nav.Link>
            <span className="footer_right_border"></span>
           <Nav.Link eventKey="link-6">Team</Nav.Link>
        </Nav>
        <Nav className="justify-content-center pt-3 pb-3" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">
            <ReactSVG src={homeIcon} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
            <ReactSVG src={vector} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
            <ReactSVG src={livemint} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      </div>
    </div> 
   

    </>
  );
};
