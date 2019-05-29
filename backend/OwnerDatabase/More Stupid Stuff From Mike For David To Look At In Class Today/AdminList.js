import React, { useState } from "react";
import gql from 'graphql-tag';
import { Query, Subscription } from 'react-apollo';
import { last, remove, isEqual, some }  from 'lodash';
import AddWaitlistItem from '../components/AddWaitlistItem';
import ShowWaitlistItems from '../components/ShowWaitlistItems'

// gotta fix this and move it into the component?
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

// changed this into component

class AdminList extends Component {

 render () {
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
      <h1>AdminList</h1>
      <Query query={GET_WAITLIST_QUERY}>
      {({ loading, error, data}) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        !waitlist.length && setWaitlist([...data.waitlistItems]);
        return (
          <>
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
          </>
        );
      }}
      </Query>
      <AddWaitlistItem addItem={addItem} />
    </>
  );
}};

export default AdminList;
