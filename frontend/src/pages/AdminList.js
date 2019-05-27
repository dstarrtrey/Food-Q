import React, { useState } from "react";
import "./AdminList.css";
import gql from 'graphql-tag';
import { Query, Subscription } from 'react-apollo';
import { last, remove, isEqual, some }  from 'lodash';
import AddWaitlistItem from '../components/AddWaitlistItem';
import ShowWaitlistItems from '../components/ShowWaitlistItems';
import { Col, Row, Container } from "../components/Grid";
// import { Input, TextArea, FormBtn } from "../components/Form";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import { FormBtn } from "../components/Form";
import Form from 'react-bootstrap/Form';



export const GET_WAITLIST_QUERY = gql`
  query GET_WAITLIST_QUERY {
    waitlistItems {
      id
      name
      partySize
      phoneNumber
      createdAt
    }
  }
`;

export const WAITLIST_SUBSCRIPTION = gql`
  subscription WAITLIST_SUBSCRIPTION {
    waitlistItem (where: {
      mutation_in: [CREATED, UPDATED, DELETED]
    }) {
      mutation
      node {
        id
        name
        partySize
        phoneNumber
        createdAt
      }
      updatedFields
      previousValues {
        id
      }
    }
  }
`;

function AdminList() {
  const [ waitlist, setWaitlist ] = useState([]);

  const removeItem = id => {
    const list = [...waitlist];
    remove(list, item => item.id === id);
    setWaitlist([...list]);
  }

  const addItem = item => {
    setWaitlist([...waitlist, item]);
  }


  return (
    <>
  
     <div className="styledAdmin">
     <Container>
     <Row>
     <Col size="md-12 lrg-12">
     {/* <img src="images/newclock.gif" alt="spinning timer"></img> */}
     
     
      <h1 className="adminList">your customers</h1>
      {/* <hr></hr> */}
      </Col>
      </Row>
      </Container>

      <Query query={GET_WAITLIST_QUERY}>
      {({ loading, error, data}) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        !waitlist.length && setWaitlist([...data.waitlistItems]);
       
        return (
        
          <>
          <Form>
            <ShowWaitlistItems
              waitlist={waitlist}
              removeItem={removeItem}
            />
            <Subscription subscription={WAITLIST_SUBSCRIPTION}>
              {({ data, loading }) => {
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
              }}
            </Subscription>
            </Form>
          </>
        
        
        );
      }}
      </Query>
      <AddWaitlistItem addItem={addItem}
      />
      <div class="populatedTable">
        <Col size="md-12 lrg-12">
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th># of Guests</th>
              <th>Phone Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>David</td>
              <td>4</td>
              <td>408)897-0098</td>
              <td><Button>Seated</Button></td>
            </tr>
            <tr>
              <td>Michael</td>
              <td>3</td>
              <td>(415)457-2914</td>
              <td><Button>Seated</Button></td>
            </tr>
            <tr>
              <td>Rachel</td>
              <td>2</td>
              <td>(510)386-2954</td>
              <td><Button>Seated</Button></td>
            </tr>
          </tbody>
          </Table>
          </Col>
          </div>
      </div>
    </>
  );

}

export default AdminList;

