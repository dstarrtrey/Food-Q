import React, { useState } from "react";
import gql from 'graphql-tag';
import { Query, Subscription } from 'react-apollo';
import { remove, some, last, isEqual } from 'lodash';
import "./ClientList.css";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Card from 'react-bootstrap/Card'
import { subscriptionFunction } from '../helperFunctions';
export const GET_WAITLIST_IDS_QUERY = gql`
  query GET_WAITLIST_IDS_QUERY {
    waitlistItems {
      id
      partySize
    }
  }
`;

export const CLIENT_WAITLIST_SUBSCRIPTION = gql`
  subscription WAITLIST_SUBSCRIPTION {
    waitlistItem (where: {
      mutation_in: [CREATED, DELETED]
    }) {
      mutation
      node {
        id
        partySize
      }
      updatedFields
      previousValues {
        id
      }
    }
  }
`;

export const MY_PARTY_QUERY = gql`
  query MY_PARTY_QUERY($id: ID) {
    waitlistItem(where: {
      id: $id
    }){
      id
      name
      partySize
    }
  }
`;
//logic

function ClientList() {
  const [ waitlist, setWaitlist ] = useState([]);
  // TODO: replace myId with whatever URL parameter is
  const myId = 'cjw4f6oao1yig0b12xv0rmhe7';
  
  // Will automatically generate updates for waitlist in Subscription component
  const subscriptionFunction = ({ data, loading}) => {
    if (loading) return null;
    const {mutation, node, previousValues} = data.waitlistItem;
    switch (mutation) {
      case "CREATED":
        if (some(waitlist, ['id', node.id])) return null;
        if (last(waitlist).id === null) {
          const list = [...waitlist];
          list[list.length - 1] = {...node};
          setWaitlist([...list]);
        } else if (!isEqual(node, last(waitlist))) {
          setWaitlist([...waitlist, node]);
        }
        break;
      case "DELETED":
        if (!some(waitlist, ['id', previousValues.id])) return null;
        const list = [...waitlist];
        remove(list, item => item.id === previousValues.id);
        setWaitlist([...list]);
        break;
      default:
        console.error(mutation, node, previousValues);
        break;
    }
    return null;
  }

  const getAhead = list => {
    const ids = list.map(item => item.id);
    return ids.indexOf(myId);
  }

  const getInFront = list => {
    const ids = list.map(item => item.id);
    const index = ids.indexOf(myId);
    return index > 0 ? list[ids.indexOf(myId) - 1].partySize : 'N/A';
  }

 //styling
  return (
    <div className="clientbanner">
    <Container> 
     <Row class="clientwaitlist">
     <Col size="md-6 lrg-6">
     <h1>ClientList</h1>
     <Query query={GET_WAITLIST_IDS_QUERY}>
       {({ loading, error, data}) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          !waitlist.length && setWaitlist([...data.waitlistItems]);
          return (
            <>
              <Query query={MY_PARTY_QUERY} variables={{id: myId}}>
                {({ loading, error, data }) => {
                  if (loading) return "Loading...";
                  if (error) return `Error! ${error.message}`;
                  const { name, partySize } = data.waitlistItem;
                  return <p><b>Your party</b>: {name}, party of {partySize}</p>
                }}
              </Query>
              <p><b>Parties ahead of you:</b> <span>{getAhead(waitlist)}</span></p>
              <p><b>Party size in front of you:</b> <span>{getInFront(waitlist)}</span></p>
              <Subscription subscription={CLIENT_WAITLIST_SUBSCRIPTION}>
                {subscriptionFunction}
              </Subscription>
            
            </>
          
          )
       }}
     </Query>
      </Col>  
    
      <div class="partyInfo">
      <Container>
       <Row>
       <Col size="md-4 lrg-4">
       <Card border="light" style={{ width: '20rem' }}>
      <Card.Header>Name</Card.Header>
      <Card.Body>
      <Card.Title>Party of</Card.Title>
      <Card.Text># of Party Size</Card.Text>
      </Card.Body>
      </Card>
      <br />
       </Col>
       <Col size="md-4 lrg-4">
      <Card border="light" style={{ width: '20rem' }}>
      <Card.Header>Parties Ahead of You</Card.Header>
      <Card.Body>
      <Card.Title>You'll be Seated Soon</Card.Title>
      <Card.Text># of Seats Before Here</Card.Text>
      </Card.Body>
      </Card>
      <br />
       </Col>
       <Col size="md-4 lrg-4">
       <Card border="light" style={{ width: '20rem' }}>
      <Card.Header>Wait Time Left</Card.Header>
      <Card.Body>
      <Card.Title>Almost there!</Card.Title>
      <Card.Text>
        Time Remaining Here
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
       </Col>
       </Row>
       </Container>
       </div>
       </Row>
       </Container>
       </div>
       
  );
}


export default ClientList;
