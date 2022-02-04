import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import girl from "../../assets/images/GIRL_1 3.png";
import secgirl from "../../assets/images/GIRL_22.png";
import opensea from "../../assets/images/opensea.png";
import logo from "../../assets/images/LOGO 1.png";

export const Sectionsec = () => {
  return (
    <div>
    <div className="community-boxtwo">
      <Row>
        <Col xs={12} md={3} className="text-center">
          <img src={girl} className="img-fluid"/>
        </Col>
        <Col xs={12} md={6}>
          <h2 className="box-heading text-center">
            <b>See the full collection<br/> on the Opensea</b>
          </h2>
          <div className="bluebtntwo text-center">
          <a href="" ><img src={opensea} className="img-fluid"/></a>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <img src={secgirl} className="img-fluid"/>
        </Col>
      </Row>
    </div>
    <div className="community-boxtwo mb-0">
    <h2 className="box-heading text-center pb-2">The Crypto Sluts</h2>
    <p className="box-pera text-center">The Crypto Sluts are a collection of NTFs programmatically generated from over 650+ possible traits<br/> across 17 different parts such as hair, eyes, mouth, accessories, tattoos, dresses, earrings, and more.<br/> Some of them are sweet like a lollipop, or dark like a gothic vampire, or just look like that girl you told your <br/> girlfriend not to worry about.</p>
    <Row>
        <Col md={6} sm={12}>
        <img src={logo} className="img-fluid" alt="logo"/>
        </Col>
        <Col md={6} sm={12}>
        <p className="box-pera">Some will even hold your favorite crypto and know that blockchain is not a new bike lock brand.</p>
        <p className="box-pera">Isn’t that cool?</p>
        <p className="box-pera">Own enough of them to have a dream harem that will be the envy of any NFT collector around the world!</p>
        </Col>
    </Row>
 </div>
 </div>
  );
};
