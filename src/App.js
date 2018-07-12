import React, { Component } from 'react';
import '../src/stylesheets/main.css';
import HikeDayCount from './components/HikeDayCount';
  

class App extends Component {
  render() {
    return (
      <div className="App">
        <HikeDayCount
          total={50}
          sunny={20}
          rainy={10}
          goal={100}
        />
      </div>
    );
  }
}

export default App;
