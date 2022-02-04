import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import heart from "../../assets/images/Vector.png";
import mint from "../../assets/images/Group51.png";
import mint2 from "../../assets/images/Group 51.svg";
import mintnow from "../../assets/images/mintnow.png";
import { ReactSVG } from 'react-svg';


export const Sectionthird = () => {
    return (
        <>
        <div className="community-boxtwo">
           <Row>
               <Col md={8} sm={12}>
               <h2 className="box-heading pb-4"><b>Why a Crypto Slut?</b></h2>
               <p className="boxtwo-pera pb-3">There are many reasons why a crypto sluts is the<br/> perfect choice for you. These are just a few:</p>
               <p className="boxtwo-pera"><img src={heart} /> <span> Charismatic and lovely girl that trigger that<br/> love at first sight feeling</span></p>
               <p className="boxtwo-pera"><img src={heart} /> <span> 12 different randomly-generated traits</span></p>
               <p className="boxtwo-pera"><img src={heart} /> <span> You can own one even if you’re married! </span></p>
               <p className="boxtwo-pera"><img src={heart} /> <span> All of them are virgins </span></p>
               <p className="boxtwo-pera"><img src={heart} /> <span> Cryptosluts are as loyal as their owner! </span></p>
               <p className="boxtwo-pera"><img src={heart} /> <span> They are nutty, cute, sexy and playful 😉 </span></p>
               <p className="boxtwo-pera"><img src={heart} /> <span> HODL your crypto slut long enough and she will bring a<br/> friend!* </span></p>
               
               </Col>
               <Col md={4} sm={12}>
                <img src={mint} className="msg_girl" />
                {/* <ReactSVG src={mint2} /> */}
               </Col>
           </Row>
        </div>
        </>
    )
}
