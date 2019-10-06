import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contacts from './Contacts';

class App extends Component {
  state = {
    contacts:[{
        name: 'Kadir',
        phone: '123123123'
    },{
        name: 'Hasan',
        phone: '4343434'
    }]
  };

  addContact = (contact) => {
    const {contacts} = this.state;
    contacts.push(contact);

    this.setState({
      contacts
    });
  }

  render() {
    return (
      <div className="App">
        <Contacts 
        addContact = {this.addContact}
        contacts = {this.state.contacts}/>
      </div>
    );
  }
}

export default App;
