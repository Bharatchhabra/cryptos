import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import table from "../../assets/images/Group88.png";
import secgirl from "../../assets/images/GIRL_22.png";
import joinnow from "../../assets/images/joinnow.png";
import twentyfive from "../../assets/images/twofive.png";
import fifty from "../../assets/images/fivezero.png";
import seventyfive from "../../assets/images/sevenfive.png";
import hundred from "../../assets/images/one.png";
import Stroke from "../../assets/images/Stroke (1).png";
import "./roadmap.scss";

export const Roadmap = () => {
  return (
     <Container className="roadmap_content">
      
        <div className="community-box mt-0 mb-0 clubgrowth">
          <Row>
            <Col xs={12} md={4}>
              <div className="bluebox">
                <img src={secgirl} className="img-fluid club_growth" />
              </div>
            </Col>
            <Col xs={12} md={8}>
              <h2 className="box-heading">
                <b>Club Growth</b>
              </h2>
              <p className="box-pera">
                The Crypto stud will be a collection of male characters which
                will be applicable to breed with the crypto sluts to create some
                new awesome NFT’s based on special treats and variations we will
                set.
              </p>

              <p className="box-pera">
                Aside from that, we have other ways to grow, which includes
                awesome games, that the crypto sluts will be used in, with a lot
                of parties, money and booze like you never did before!
              </p>

              <p className="box-pera">
                40% of the project funds are dedicated to the slut fund, which
                will operate as the club main cash flow for growth, development
                and fun.
              </p>

              <p className="box-pera">
                So Join the Crypto Slut Club now, as the spots are limited!
              </p>
            </Col>
          </Row>  
        </div>
        <Row className="justify-content-center get_section text-center text-light">
          <Col xs={12} md={9}>
            <h3 className="heading-h3">
              Get a chance to win one of the rare NFT’s
              <br />
              we will be giving to 100 random subscribers!
            </h3>
            <p className="box-pera">
              Join The Whitelist for the rare NFT drop!
            </p>
            <a href=""><img src={joinnow} className="img-fluid"/></a>
          </Col>
        </Row>
      </Container>
  );
};
