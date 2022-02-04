import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import twentyfive from "../../assets/images/twofive.png";
import fifty from "../../assets/images/fivezero.png";
import seventyfive from "../../assets/images/sevenfive.png";
import hundred from "../../assets/images/one.png";
import Stroke from "../../assets/images/Stroke (1).png";
import "./roadmap.scss";

export const Roadmap_section = () => {
    return (
        <div>
            <Container>
        <div className="community-boxtwo road_map">
          <h2 className="box-heading pb-2 text-center">
            <b>Road map</b>
          </h2>
          <p className="box-pera pb-2 text-center">
            The roadmap of the crypto slut is going to be extreme fun!
          </p>
          <img src={Stroke} className="vertical"/>
          <p className="d-flex">
            <img src={twentyfive} className="bubble"/>
          {/* <span className="percent">25%</span> */}
          <span className="box-pera">
           Once 25% of the Crypto sluts has been minted, we will award the top
            150 wallets which are holding the most sluts with a special NFT of a
            random Crypto Nurse Slut , There are only going to be 150 of those!{" "}
          </span></p>
          
          <p className="d-flex">
            <img src={fifty} className="bubble"/>
          {/* <span className="percent">50%</span> */}
          <span className="box-pera">
            Once 50% of the crypto sluts has been minted, we will award the top
            random 150 wallets with another special NFT airdrop of a random
            crypto slut wearing a cooking apron with special treats!{" "}
          </span></p>
          
          <p className="d-flex">
            <img src={seventyfive} className="bubble"/>
          {/* <span className="percent">75%</span> */}
          <span className="box-pera">
            Once 75% of the crypto sluts has been minted, we will start a new
            count down for the BFF club, (Best Friends Forever Club) where you
            will be able to mint every slut Best Friend Forever, which only
            crypto sluts holders will be able to mint! This collection will be
            another 10,000 different crypto sluts which are reserved for each
            crypto slut owner (every slut will be able to bring just 1 friend,
            if the owner decides to mint it!){" "}
          </span>
          </p>
          <p className="d-flex">
            <img src={hundred} className="bubble"/>
          {/* <span className="percent">100%</span> */}
          <span className="box-pera">
            Once 100% of the crypto sluts has been minted, we will get drunk as
            fuck first, and after that we will start working on the new Crypto
            Stud collection! Which in it’s turn, will bring the eco system into
            a new phase of growth and our exclusive club to something extra
            ordinary the world as yet to see.{" "}
          </span></p>
          
        </div>
        </Container>
        </div>
    )
}
