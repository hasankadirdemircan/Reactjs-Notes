<h1> State Kullanımı </h1>

## Nedir?
 State -> Uygulama içerisinde her an ki bir anda değeri değişebilecek olan verileri tutan javascripttir objesidir ve state her değiştiğinde componentintin **render** fonksiyonunu tekrar çalışmasını sağlar.
 
 Statefull -> State objesi olan component.
 
 Stateless -> Stateless değişmeyen component'lerde kullanılır , Footer, Header gibi. (React'ın diff algoritmasına dahil edilmez ve hızlı olur.), state değiştireceği bir render methodu olmaz.
 
 ### Screenshot
 </p>
<p align="center">
  <a href="https://user-images.githubusercontent.com/34090058/72662787-6e1a9880-39fc-11ea-8eb7-2aaa2a24370f.png">
    <img alt="Techs" title="Techs" src="https://user-images.githubusercontent.com/34090058/72662787-6e1a9880-39fc-11ea-8eb7-2aaa2a24370f.png"width="400">
  </a>
</p>

# Code Example

 Statefull -> Counter.js
 ```js
//stateful -> state olan component
class Counter extends React.Component{
    state = {
        number: 0
    }

    decrement = () => {
        this.setState({
            number: --this.state.number
        });
    }
    increment = () => {
        this.setState({
            number: ++this.state.number
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick = {this.increment}>+</button>
                <button onClick = {this.decrement}>-</button>
            </div>
        )
    }
}
 ```
 
 Stateless -> Footer.js
  ```js
 const Footer = () => 
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
            footer
    </div>
 ```
 
 App.js
```js
import Counter from './Counter';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Counter/>
        <Footer/>
      </div>
    );
  }
}
```
