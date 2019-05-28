import React from "react";
import "./Login.css";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
    <div className="loginStyle">
     <img src="images/foodqlogo.png" alt="foodq logo"></img>
    <Container> 
    <Row> 
      <Col size="md-12 lrg-12">
       <form class="userform">
          <p class="Username">Username</p>
           <Input name="Login" placeholder="Login" />
            <p class="Password">Password</p>
           <Input name="TypePassword" placeholder="Password" />
           <Link to="/AdminList"><FormBtn>Log In</FormBtn></Link>
           </form>
    </Col>
    </Row>
    </Container>
    </div>
    
    <div className="contact">
    <Container>
      <Row>
      <Col size="md-12 lrg-12">
      <h1>contact us</h1>
      <hr></hr>
      </Col>
    </Row>
    </Container>
    </div>

    <div className="iconsection">
    <Container>
      <Row>
      <Col size="md-4 lrg-4">
      <img class="iconimages" src="images/phone_icon.png" alt="foodq logo"></img>
      <h2>telephone</h2>
      <p>If your app is experiencing operating issues, 
        we can assist you over the phone. Reach us at 800-354-9897.
      </p>
      </Col>
      <Col size="md-4 lrg-4">
      <img class="iconimages" src="images/envelope_icon.png" alt="foodq logo"></img>
      <h2>email</h2>
      <p>Have general questions? Place an order ticket and we will respond
         within 24 hours of recieving the email.
      </p>
      </Col>
      <Col size="md-4 lrg-4">
      <img class="iconimages" src="images/like_icon.png" alt="foodq logo"></img>
      <h2>review</h2>
      <p>Your restauraunt and team's feedback is important. 
        Let us know how we are doing, and leave suggestions!</p>
      </Col>
    </Row>
    </Container>
    </div>
    </>
  );
};
export default Login;
