import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import table from "../../assets/images/Pattern_Copy11.png";
import sectable from "../../assets/images/table111.png";
import girlblack from "../../assets/images/GIRL_12.png";
import secgirl from "../../assets/images/GIRL_22.png";
import "./tablegallery.scss";
import logo from "../../assets/images/LOGO 1.png";

export const Tablegallery = () => {
  return (
  
      <div className="tablegallery position-relative">
        <div className="image_table">
          <img src={table} className="img-fluid " />
        </div>
        <Container className="ontop_section">
          <div className="community-box text-center">
            <h2 className="box-heading pb-3">
              But on top of that, the Crypto Sluts <br />
              aren’t just pretty faces.
            </h2>
            <p className="box-pera pb-3">
              They’re a love letter to the freedom and fun that the crypto
              ecosystem brings to us. And they’re a serious proof that we can
              have total freedom to express through art and ideas without being
              ‘tabooed’ or frowned upon by mainstream media and overly sensitive
              platforms.
            </p>
            <p className="box-pera pb-5">They also have big breasts.</p>
            <Row>
              <Col xs={3} md={3}>
                <img src={girlblack} className="img-fluid blackgirl" />
              </Col>
              <Col xs={6} md={6}>
                <img src={logo} className="img-fluid" alt="logo"/>
              </Col>
              <Col xs={3} md={3}>
                <img src={secgirl} className="img-fluid pinkgirl" />
              </Col>
            </Row>
          </div>
        </Container>
        <img src={sectable} className="img-fluid sec_table" />
      </div>
     
  );
};
