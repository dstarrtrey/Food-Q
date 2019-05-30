import React from 'react';
<<<<<<< HEAD
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div class="jumbotron jumbotron-fluid">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">Angry Fish Sushi</p> 
    </div>
    <div class="container-fluid">
    <img src="images/sushi_img.jpg" alt="strawberry roll" height="600px" width="600px"></img>
    <p className="owner-login">Welcome to Angry Fish Sushi</p>
    <Link to="/Menu"><button className="search-button" type="submit">Browse Menu</button>
    </Link>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    </div>
    </div>
    </>
  );
};
export default Home;
=======
import { Col, Row, Container } from "../components/Grid/index";
import Banner from "../components/Banner/index";
import "./Home.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="styledHome">
      <Banner backgroundImage="images/sushibanner.jpg">
        {/* <h1>Angry Fish Sushi</h1>
        <h2>San Leandro, CA</h2> */}
      </Banner>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12 lrg-12">
            <h1 className="introheader">Angry Fish Sushi</h1>
          </Col>
        </Row>
        <Row>
          <Col className="box" size="md-12 lrg-12">
          <p><i className="fas fa-map-marker-alt"></i> LOCATION - 16250 E 14th St, San Leandro, CA 94578</p>
          <hr></hr>
          <p><i className="fas fa-utensils" ></i> TYPE OF CUISINE - Japanese</p>
          <hr></hr>
          <p>RATINGS - <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></p>
          <hr></hr>
          <p><i className="fas fa-clock"></i> AVERAGE WAIT TIME - 30 minutes</p>
          <Link to="/Menu"><Button type="submit">Browse Menu</Button>
          </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;


>>>>>>> fddfa989525de6d245c81b6d27d3e195f92c57d2
