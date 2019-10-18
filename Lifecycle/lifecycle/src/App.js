import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

class App extends Component {

  state = {
    name:'hasan'
  }

  constructor(props){
    super();
    console.log("constructor");
    console.log(props);
    this.state = {
      name: 'kadir',
      tl:0
    }
  }

  //render'dan hemen once once calisir.
  componentWillMount() {
    console.log("componentWillMount");
  }
  //render'dan hemen sonra calisir.
  //servis çağrımlarını yapar.
  componentDidMount() {
    console.log('componentDidMount');
  }
  
  changeName = () => {
    this.setState({
      name: 'demircan'
    });
  }
  changeTL = (e) => {
    this.setState({
      tl: e.target.value
    })
  }
  //gerekli zamanlarda props ve state güncelleme için.
  //render'dan önce çalışır.
  shouldComponentUpdate(nextProps, nextState){
    //console.log(nextProps, nextState);
    return (nextState.tl % 10) === 0;
  }

  //shouldComponentUpdate çalışırsa çalışacak.
  //render'dan önce.
  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate')
  }

  //render'dan sonra çalışır.
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }
  
  render() {
    console.log('render');
    return (
      <div className="App">
        {this.state.name}
        <br/>
        <Child name = {this.state.name}/>
        <button onClick={this.changeName}>Change the name</button>
        <input name="tl" id="tl" onChange={this.changeTL}/>
        Her elma 10TL. <br/>
        {this.state.tl / 10} tane elma alabilirsiniz.
      </div>
    );
  }
}

export default App;
