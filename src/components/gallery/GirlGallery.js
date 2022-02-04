import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import secgirl from '../../assets/images/GIRL_22.png'
import girl from "../../assets/images/GIRL_1 3.png";
import girlred from "../../assets/images/GIRL_3 3.png";
import Girlssection from "../../assets/images/Girlssection.png";
import './tablegallery.scss'

export const GirlGallery = () => {
    return (
           <Container className="gs">
               <Row className="text-center">
                   <Col md={12} sm={12}>
                    <img src={Girlssection} className="img-fluid image_gallery" />
                   </Col>  
               </Row>
           </Container> 
    )
}
