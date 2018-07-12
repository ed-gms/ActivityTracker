import React, { Component } from 'react';
import '../src/stylesheets/main.css';
import HikeDayCount from './components/HikeDayCount';
  

class App extends Component {
  render() {
    return (
      <div className="App">
       <HikeDayCount/>
      </div>
    );
  }
}

export default App;
