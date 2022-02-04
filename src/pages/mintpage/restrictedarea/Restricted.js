import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './restricted.scss'
import accessbtn from '../../../assets/images/Group 228.png'
import logo from '../../../assets/images/LOGO 1.png'


export const Restricted = () => {
    return (
        <>
        <div className="restricted_img ">
           <Container>
               <Row className="justify-content-center text-center">
                   <Col md={4} xs={12} className="restricted_section">
                   <img src={logo} className="restricted_logo"/>
                   <h3 className="restric_h3">Restricted Area</h3>
                   <h4 className="restric_h4">Crypto Slut Owners Only</h4>
                   <img src={accessbtn} className="img-fluid"/>
                   </Col>
               </Row>
           </Container> 
        </div>
        </>
    )
}
