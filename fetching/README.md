<h1>Fetching(Axios) Kullanımı </h1>

## Fetching

Api çağırımlarında kullanabileceğimiz bir kütüphanedir.
Kolaylıkla bir backend servisimize parametre yollayabiliriz.
Apilerimizi çağırabiliriz.

**componentDidMount()** -> 
render'dan hemen sonra calisir.
servis çağrımlarını yapabiliriz.

### Screenshot

<p align="center">
  <a href="https://user-images.githubusercontent.com/34090058/73009316-5f2f4e00-3e21-11ea-8a1a-d3e358abc082.png">
    <img alt="Techs" title="Techs" src="https://user-images.githubusercontent.com/34090058/73009316-5f2f4e00-3e21-11ea-8a1a-d3e358abc082.png"width="400">
  </a>
</p>


# Code Example

 ```js
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
 ```
