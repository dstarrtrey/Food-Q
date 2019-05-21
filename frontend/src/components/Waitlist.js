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

  return (
    <div>
      <Query query={GET_WAITLIST_QUERY}>
        {({data, error, loading}) => {
          const { waitlistItems } = data;
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          return (
            <div>
              {waitlistItems.map(item => (
                <p key={item.id}>
                  {item.name}, party of 
                  {item.partySize}
                </p>)
              )}
            </div>
          );
        }}
      </Query>
    </div>
  )
}

export default Waitlist;
