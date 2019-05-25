import React from 'react';
import { Query, Subscription } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { formatPhoneNumber } from '../helperFunctions';

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
    newWaitlistItem {
      id
      name
      partySize
      phoneNumber
      createdAt
    }
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  &.legend {
    font-weight: bold;
  }
`;

const ShowWaitlistItems = () => {
  return (
    <Query query={GET_WAITLIST_QUERY}>
      {({ loading, error, data}) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        console.log(data);
        return (
          <>
            <StyledGrid className="legend">
              <div>Name</div>
              <div>Party Size</div>
              <div>Phone Number</div>
            </StyledGrid>
            {data.waitlistItems.map(item => (
              <StyledGrid key={item.id}>
                <div>{item.name}</div>
                <div>{item.partySize}</div>
                <div>{formatPhoneNumber(item.phoneNumber)}</div>
              </StyledGrid>
            ))}
            <Subscription subscription={WAITLIST_SUBSCRIPTION}>
              {({ data: { newWaitlistItem }, loading }) => !loading && (
                <StyledGrid key={newWaitlistItem.id}>
                  <div>{newWaitlistItem.name}</div>
                  <div>{newWaitlistItem.partySize}</div>
                  <div>{formatPhoneNumber(newWaitlistItem.phoneNumber)}</div>
                </StyledGrid>
              )}
            </Subscription>
          </>
        )
      }}
    </Query>
  );
};

export default ShowWaitlistItems;