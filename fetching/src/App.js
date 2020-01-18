import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    isLoading: true
  };
  //api cagirimlari icin en uygun yapi.
  componentDidMount() {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(data => data.data )
      .then(users => {
        this.setState({
          users,
          isLoading: false
        })
      })
      // with fetch
      /* fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => {
        this.setState({
          users,
          isLoading: false
        })
      })  */
    }, 3000);
   
  }
  
  render() {
    const { isLoading } = this.state;

    return (
      <div className="App">
        <h1>Users</h1>
        { isLoading ? 'Loading..' : ''}
        {
          !isLoading ? this.state.users.map(user => 
            <div key={user.id} className={"userList"}>
              {user.name} - @{ user.username }
            </div>
            ) : null
        }
      </div>
    );
  }
}

export default App;
