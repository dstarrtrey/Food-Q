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
       <form class="userform">
          <p class="Username">Username</p>
           <Input name="Login" placeholder="Login" />
            <p class="Password">password</p>
           <Input name="TypePassword" placeholder="Password" />
           <Link to="/OwnerList"><FormBtn class="loginbtn">Log In</FormBtn></Link>
           </form>
    </Col>
    </Row>
  </Container>
    </div>
  );
};
export default Login;



// function Login() {
//   return (
//     <div>
//     <Container> 
//      <Row> 
//        <Col size="md-6 lrg-6">
//          <form>
//            <p>Username</p>
//            <Input name="Login" placeholder="Login" />
//            <p>password</p>
//            <Input name="password" placeholder="Password" />
//            <TextArea name="specialrequest" placeholder="Specific seating needs or special occasion?" />
//            <FormBtn>Book Reservation</FormBtn>
//          </form>
//        </Col>
//      </Row>
//    </Container>
//    </div>
//   );
// };
// export default Login;

//my working code
// function Login() {
//   return (
//     <div className="Login">
//     <img src="images/foodqlogo.png" alt="foodq logo" height="200px" width="auto"></img>
//     <p className="owner-login">Username</p>
//     <form className="search-form">
//     <input className="search-bar" type="text"/>
//     </form>  
//     <p className="owner-login">Password</p>
//     <form className="search-form">
//     <input className="search-bar" type="text"/>
//     </form>
//     <Link to="/OwnerList"><button className="search-button" type="submit">Login</button>
//     </Link>
//     </div>
//   );
// };
// export default Login;

