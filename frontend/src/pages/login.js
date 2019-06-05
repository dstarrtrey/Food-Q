import React, { useState } from "react";
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom";
import "./Login.css";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, SubmitBtn } from "../components/Form";

export const IS_LOGGED_IN_QUERY = gql`
  query IS_LOGGED_IN_QUERY {
    isLoggedIn
  }
`;

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
const StyledMessage = styled.p`
  color: white;
  text-decoration: underline;
  text-underline-position: under;
`;

function Login(props) {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  
  return (
  <Query query={IS_LOGGED_IN_QUERY}>
    {({loading, error, data: { isLoggedIn }}) => {
      if (loading) return "loading...";
      if (error) {
        console.log(error)
      };
      return isLoggedIn ? <Redirect to="/testAdminList" /> : (
      <>
        <div className="loginStyle">
        <img src="images/foodqlogo.png" alt="foodq logo"></img>
          <Container> 
            <Row> 
              <Col size="md-12 lrg-12">
                <StyledMessage>{props.children}</StyledMessage>
                <Mutation mutation={ADMIN_LOGIN_MUTATION} variables={{username, password}}>
                  {(login, { loading, error }) => (
                    <form
                      onSubmit={async e => {
                        e.preventDefault();
                        await login();
                        props.fetchLoginState();
                      }}
                      className="userform"
                    >
                      <p className="Username">Username</p>
                      <fieldset disabled={loading}>
                        <Input
                          name="username"
                          value={username}
                          onChange={e => setUsername(e.target.value)}
                          placeholder="Username" 
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
                        <input
                          type="submit"
                          value="Log In"
                        />
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
    }}
  </Query>
  );
};
export default Login;
