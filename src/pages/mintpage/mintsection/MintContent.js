import React from 'react'
import './mint.scss'
import { Row, Col, Container } from "react-bootstrap";
import heart from '../../../assets/images/Vector.png'
import mint_girl from '../../../assets/images/mint_girl.png'
import mintnow from '../../../assets/images/mintnow.png'


export const MintContent = () => {
    return (
        <div className="container content mint_content position-relative">
            <div className="community-boxtwo mt-0 mb-0">
             <h3 className="mint_section_heading">Your Crypto Slut is Thrilled to Meeting You</h3>
             <h3 className="heading_shadow">OPEN UNTIL SOLD OUT</h3>
           <Row>
               <Col md={8} sm={12}>
               <p className="boxtwo-pera pb-3">Mint your own Crypto Slut and get:</p>
               <p className="boxtwo-pera"><img src={heart} /> <span> Exclusive Club Membership </span></p>
               <p className="boxtwo-pera"><img src={heart} /> <span>Provably Rare Crypto Slut NFT (over XX possible traits)</span></p>
               <p className="boxtwo-pera"><img src={heart} /> <span>Compete for one of the 150 free rare Nurse Sluts after<br/> 25% threshold</span></p>
               <p className="boxtwo-pera"><img src={heart} /> <span>Compete for one of the limited Cooking Apron Sluts<br/> after 50% threshold</span></p>
               <p className="boxtwo-pera"><img src={heart} /> <span>Opportunity to take part in the future of the project</span></p>
               
                </Col> 
               <Col md={4} sm={12}>
                   <img src={mint_girl} className="img-fluid"/>
               </Col> 
           </Row>
           <div className="text-center"><a href="" className="mint_btn"><img src={mintnow} /></a></div>
         </div>
        </div>
    )
}
