import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

//import component
import News from './News';

const news = [{
  id : 1,
  title : "title1",
  description : "description1"
},
{
  id : 2,
  title : "title2",
  description : "description2"  
},
{
  id : 3,
  title : "title3",
  description : "description3"  
}];

class App extends Component {

  addNews(){
    console.log('addNews Fonksiyonu Çalıştı.');
    news.push({
      id: 4,
      title: 'title 4',
      description: 'description 4'
    });
    console.log(news);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <News news = {news} name = {"kadir"} addNews={this.addNews} />
      </div>
    );
  }
}

export default App;
