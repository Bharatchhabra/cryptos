import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./welcomepage.scss";
import gif from "../../assets/images/Gif.png"

export const SectionBox = () => {
  return (
    <>
    <div>
    <div className="community-boxtwo">
      <Row>
        <Col xs={12} md={8}>
          <h2 className="box-heading mb-3">Looking for some fun ?</h2>
          <p className="box-pera">
            You’re in the right place. Sit down and choose from our
            <br /> 10,000 unique Crypto Sluts to make your day.
          </p>
          <p className="box-pera">
            All of them charming and heartbreaking, they might
            <br /> remind you of that girl you fell in love with…
          </p>
          <p className="box-pera"> Only they will NOT break your heart!</p>
          <p className="box-pera">
            And the best part? You get more chances to find super
            <br /> rare traits than the average NFT collection!
          </p>
        </Col>
        <Col xs={12} md={4}>
          <div className="bluebox">
            <img src={gif} className="img-fluid"/>
          </div>
        </Col>
      </Row>
    </div>
    </div>
    </>
  );
};
