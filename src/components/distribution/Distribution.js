import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import redgirl from "../../assets/images/GIRL_31.png";
import mintnow from "../../assets/images/mintnow.png";
import "./distribution.scss";

export const Distribution = () => {
  return (
    
      <Container className="distribution_container">
        <div className="community-boxtwo mt-0">
          <h2 className="box-heading pb-3">
            Where do s Come From?
          </h2>
          <Row>
            <Col md={6} sm={12}>
              <p className="pera">
                It is said that the Crypto Sluts were created by God himself,
                long before Adam and Eve. The most perfect thing he had ever
                made — 10,000 of the most beautiful crypto sluts the metaverse
                would ever see.
              </p>

              <p className="pera">
                He wanted to keep them for himself, so he hid them in his
                mansion and didn’t tell anybody. They became his personal nun
                servants, taking care of the daily chores while he floods random
                planets. But there’s only one thing that the Crypto Sluts hate
                more than ironing clothing: boredom.
              </p>
            </Col>
            <Col md={6} sm={12}>
              <p className="pera">
                Luckily, good Judas was there to lend a helping hand.
              </p>
              <p className="pera">
                He found a secret passage and freed some Crypto Sluts in random
                wallets across the cryptoverse. He promised he would save them
                all, but then he began asking for money to release the rest.
              </p>

              <p className="pera">Nobody expected that betrayal.</p>
            </Col>
          </Row>
        </div>

        <div className="community-box">
          <Row>
            <Col md={4} sm={12}>
              <img src={redgirl} className="img-fluid" />
            </Col>
            <Col md={8} sm={12}>
              <h2 className="box-heading pb-3">
                Now, the Crypto Sluts are looking
                <br /> for a good — and not so pure —<br /> soulmate who will
                adopt them.
              </h2>
              <p className="box-p mb-0">All they want is to have some fun.</p>
              <a href=""><img src={mintnow} className="img-fluid" /></a>
            </Col>
          </Row>
        </div>

        <div className="community-boxtwo">
          <h2 className="box-heading pb-3">Distribution</h2>
          <p className="box-pera">
            The Crypto Sluts might not be saints, but they offer a fair deal.
            They all sell equally for 0.1 ETH, and the price will stay the same
            until they run out. No sweet talk, just curves.
          </p>
          <p className="box-pera">
            Love is a capricious creature. So are Crypto Sluts. That’s why, when
            you toss the coin, what you're minting is a random, provably rare
            hottie NFT. She chooses you – not the other way around
          </p>
          <p className="box-pera">
            And what you get? A dream girl with the rare combination of both
            charisma and beauty.{" "}
          </p>
          <p className="box-pera">
            Not only a sexy NFT, but an authentic soulmate. A close companion
            that’ll offer you her love and loyalty along with unwavering
            affection for all eternity — well, or until you sell it to the
            highest bidder.
          </p>
          <p className="box-pera">
            It might not be the next ape club, but it’s surely sexier.
          </p>
          <p className="box-pera">The only impossible thing is to resist their natural charms — that’s
          the hard part. Crypto Sluts are loyal, but you can’t blame them if
          they drool for the biggest wallet — or if wallet owners drool for
          them.</p>
          <p className="box-pera">
            The Crypto Sluts are all that’s good about life and about the
            internet. They represent the unchained will to just enjoy — free of
            prejudice and reproach. They are the voice of liberation. The beauty
            of absurdity. By themselves, and being part of the blockchain
            ecosystem, they are revolutionary.
          </p>
        </div>

        <div className="community-boxtwo mb-0">
          <Row className="whitelist">
            <Col sm={12} md={5}>
              <h2 className="box-heading">Join our whitelist</h2>
              <p className="secpera">Get a chance to win a rare NFT!</p>
            </Col>
            <Col sm={12} md={7}>
              <Row className="mt-4">
                <Col sm={12} md={8}>
                <Form.Control type="Email Address" placeholder="Email Address" />
                </Col>
                <Col sm={12} md={4} className="inputbtn">
                <Button className="input-btn">Sign Up</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    
  );
};
