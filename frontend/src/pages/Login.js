import React, { useState } from "react";
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import "./Login.css";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";

export const ADMIN_LOGIN_MUTATION = gql`
  mutation ADMIN_LOGIN_MUTATION(
    $username: String!
    $password: String!
  ) {
    login(username: $username password: $password)
  }
`;

const LoginError = styled.small`
  color: #989696;
`;

function Login() {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <>
    <div className="loginStyle">
     <img src="images/foodqlogo.png" alt="foodq logo"></img>
    <Container> 
    <Row> 
      <Col size="md-12 lrg-12">
        <Mutation mutation={ADMIN_LOGIN_MUTATION} variables={{username, password}}>
          {(login, { loading, error }) => (
            <form
              onSubmit={async e => {
                e.preventDefault();
                const res = await login();
                const valid = res.data.login;
                console.log(valid);
              }}
              className="userform"
            >
              <p className="Username">Username</p>
              <fieldset disabled={loading}>
                <Input
                  name="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Login" 
                />
                  <p className="Password">Password</p>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password" 
                />
                {error && <p><LoginError>Error: {error.graphQLErrors[0].message}</LoginError></p>}
                <FormBtn>Log In</FormBtn>
              </fieldset>
            </form>
        )}
        </Mutation>
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
      <img className="iconimages" src="images/phone_icon.png" alt="foodq logo"></img>
      <h2>telephone</h2>
      <p>If your app is experiencing operating issues, 
        we can assist you over the phone. Reach us at 800-354-9897.
      </p>
      </Col>
      <Col size="md-4 lrg-4">
      <img className="iconimages" src="images/envelope_icon.png" alt="foodq logo"></img>
      <h2>email</h2>
      <p>Have general questions? Place an order ticket and we will respond
         within 24 hours of recieving the email.
      </p>
      </Col>
      <Col size="md-4 lrg-4">
      <img className="iconimages" src="images/like_icon.png" alt="foodq logo"></img>
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
