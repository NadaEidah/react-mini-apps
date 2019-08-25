import React, {Component} from 'react';
import logo from './logo.svg';
import Card from './cards';
import showDetails from './showDetails';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" /> 
            <p>
             simple React App
            </p>   
      </header>
      <Card/>
     <showDetails/>
    </div>
     );
  }
}
 
export default App;

