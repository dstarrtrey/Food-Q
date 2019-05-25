import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

// TODO: Write graphql query with apollo to send data from form to database
// TODO: Set up gql subscription so waitlist automatically updates cross-platform

export const ADD_WAITLIST_ITEM_MUTATION = gql`
  mutation ADD_WAITLIST_ITEM_MUTATION(
    $name: String!
    $partySize: Int!
    $phoneNumber: String
  ) {
    createWaitlistItem(
      name: $name
      partySize: $partySize
      phoneNumber: $phoneNumber
    )
    {
      id
      name
      partySize
      phoneNumber
      createdAt
    }
  } 
`;


class AddWaitlistItem extends Component {
  state = {
    name: "",
    partySize: 0,
    phoneNumber: "",
  }

  handleChange = event => {
    const { name, value, type } = event.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name] : val 
    });
  }

  render() {
    return (
      <Mutation mutation={ADD_WAITLIST_ITEM_MUTATION} variables={this.state}>
        {(createWaitlistItem, { loading, error }) => (
          <form onSubmit={async event => {
            event.preventDefault();
            return await createWaitlistItem();
          }}>
            <fieldset disabled={loading}>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                id="name"
              />
              <input
                type="number"
                name="partySize"
                value={this.state.partySize}
                onChange={this.handleChange}
                id="party-size"
              />
              <input
                type="tel"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                id="phone-num"
              />
              <input
                type="submit"
                value="Add"
              />
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
};

export default AddWaitlistItem;