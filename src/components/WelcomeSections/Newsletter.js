import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import heart from "../../assets/images/Vector.png";
import mint from "../../assets/images/Group51.png";
import mint2 from "../../assets/images/Group 51.svg";
import mintnow from "../../assets/images/mintnow.png";
import { ReactSVG } from 'react-svg';


export const Newsletter = () => {
    return (
        <>
        <div className="newsletter">
          <Row className="justify-content-center pb-5 text-light welcomesec">
            <Col xs={12} md={6}>
              <div className="text-center">
                <h3 className="heading-h3">Mint Your Crypto Slut!</h3>
                <p className="box-pera">Become part of our exclusive club - own your crypto <br/> slut and live happily ever after!</p>
                <a href="" ><img src={mintnow} className="img-fluid"/></a>
              </div>
            </Col>
          </Row>
        </div>

        </>
    )
}
