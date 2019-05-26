import React from "react";
import "./Login.css";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="Login">
     <img src="images/foodqlogo.png" alt="foodq logo" height="300px" width="auto"></img>
    <Container> 
    <Row> 
      <Col size="md-12 lrg-12">
       <form className="userform">
          <p className="Username">Username</p>
           <Input name="Login" placeholder="Login" />
            <p className="Password">password</p>
           <Input name="TypePassword" placeholder="Password" />
           <Link to="/OwnerList"><FormBtn className="loginbtn">Log In</FormBtn></Link>
           </form>
    </Col>
    </Row>
  </Container>
    </div>
  );
};
export default Login;



