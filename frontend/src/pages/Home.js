import React from 'react';
import { Col, Row, Container } from "../components/Grid/index";
import Banner from "../components/Banner/index";
import "./Home.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Home() {
  return (
    <div class="styledHome">
    <Banner backgroundImage="images/sushibanner.jpg">
        {/* <h1>Angry Fish Sushi</h1>
        <h2>San Leandro, CA</h2> */}
      </Banner>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12 lrg-12">
            <h1 class="introheader">Angry Fish Sushi</h1>
          </Col>
        </Row>
        <Row>
          <Col className="box" size="md-12 lrg-12">
          <p><i class="fas fa-map-marker-alt"></i> LOCATION - 16250 E 14th St, San Leandro, CA 94578</p>
          <hr></hr>
          <p><i class="fas fa-utensils" ></i> TYPE OF CUISINE - Japanese</p>
          <hr></hr>
          <p>RATINGS - <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></p>
          <hr></hr>
          <p><i class="fas fa-clock"></i> AVERAGE WAIT TIME - 30 minutes</p>
          <Link to="/Menu"><Button type="submit">Browse Menu</Button>
          </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;


