import React from 'react';
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