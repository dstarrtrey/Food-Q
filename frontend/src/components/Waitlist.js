import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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

function Waitlist() {
  const waitlist =[
    {
      id: 1,
      name: "Arthur",
      partySize: 3,
      phoneNumber: 7737377373
    },
    {
      id: 2,
      name: "Bob",
      partySize: 6,
      phoneNumber: 7373737379
    },
    {
      id: 3,
      name: 'Michael',
      partySize: 2,
      phoneNumber: 7838383336
    }
  ];
  const myId = 2;
  
  const getAhead = arr => {
    const ids = arr.map(item => item.id);
    return ids.length - ids.indexOf(myId) - 1;
  }

  const getInFront = arr => {
    const ids = arr.map(item => item.id);
    return arr[ids.indexOf(myId) + 1].partySize;
  }

  return (
    <div>
      <Query query={GET_WAITLIST_QUERY}>
        {(payload) => {
          console.log(payload);
          return (
            <div>
              {/* <p>{payload}</p> */}
              {/* <p>All parties ahead of you: <span>{getAhead(payload)}</span></p> */}
              {/* <p>Party size in front of you: <span>{getInFront(payload)}</span></p> */}
            </div>
          );
        }}
      </Query>
    </div>
  )
}

export default Waitlist;
