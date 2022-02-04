import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import table from "../../assets/images/Group88.png";
import twentyfive from "../../assets/images/twofive.png";
import fifty from "../../assets/images/fivezero.png";
import seventyfive from "../../assets/images/sevenfive.png";
import hundred from "../../assets/images/one.png";
import Stroke from "../../assets/images/Stroke (1).png";
import "./roadmap.scss";
import { Roadmap_section } from "./Roadmap_section";

export const TableImage = () => {
  return (
      <>
        <div className="table_img">
         <div className="imagetable">
            <img src={table} className="img-fluid" />
         </div>
          <Roadmap_section />
        
        </div>
        
      </>  
    
  );
};
