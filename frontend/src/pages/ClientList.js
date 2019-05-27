import React, { useState } from "react";
import gql from 'graphql-tag';
import { Query, Subscription } from 'react-apollo';
import { remove, some, last, isEqual } from 'lodash';
import "./ClientList.css";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import LoadingBar from '../components/LoadingBar';
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
  const [ starts, setStarts ] = useState({
    startingLength: 0,
  })
  // TODO: replace myId with whatever URL parameter is
  // TODO: Make a loading bar!
  
  const myId = 'cjw6z3w8xl0nc0b42o92j02au';
  
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
    <Container fluid>
    <Col size="md-12 lrg-12">
    <Jumbotron>
           <h2>Banner Image / Animated SVG here</h2>
         </Jumbotron>
    </Col>    
    </Container>
    <Container> 
     <Row class="clientwaitlist">
     <Col size="md-6 lrg-6">
     <h1>ClientList</h1>
     <Query query={GET_WAITLIST_IDS_QUERY}>
       {({ loading, error, data}) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          if (!waitlist.length) {
            setWaitlist([...data.waitlistItems]);
            const start = getAhead(data.waitlistItems);
            setStarts({
              startingLength: start + 1,
            });
          }
          return (
            <>
              <LoadingBar
                starts={starts}
                index={getAhead(waitlist)}
              />
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
       <Col size="md-6 lrg-6">
         <form>
           <Input name="name" placeholder="Name (required)" />
           <Input name="Party Size" placeholder="Party Size (required)" />
           <TextArea name="specialrequest" placeholder="Specific seating needs or special occasion?" />
           <FormBtn>Book Reservation</FormBtn>
         </form>
       </Col>
     </Row>
   </Container>
   </div>

  );
}


export default ClientList;
