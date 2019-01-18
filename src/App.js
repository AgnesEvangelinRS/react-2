import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar  from'./components/navbar';
import Counters from './components/counters';
class App extends Component {
// constructor(props)
 //{
  // super(props);
   //console.log('App-constructor')
 //}
 //componentDidMount(){
  // console.log('app mounted')
// }

  render() {
    //console.log('app rendered')
    return (
      <div>
        <NavBar/>
        <Counters/>
      </div>
    );
  }
}

export default App;
