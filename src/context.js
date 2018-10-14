import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'karensmith@gmail.com',
        phone: '333-333-3333'
      },
      {
        id: 3,
        name: 'Zeeshan Tamboli',
        email: 'zee@gmail.com',
        phone: '999-999-9999'
      },
      {
        id: 4,
        name: 'Javed Tamboli',
        email: 'javed@gmail.com',
        phone: '666-666-6666'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
