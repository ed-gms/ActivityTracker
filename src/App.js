import React, { Component } from "react";
import "../src/stylesheets/main.css";
import HikeDayList from "./components/HikeDayList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HikeDayList
          days={[
            {
              trail: "Baden Powell - Deep Cove To Lynn Canyon",
              date: new Date("7/14/2018"),
              sun: true,
              rain: false
            },
            {
              trail: "Baden Powell - Lynn Canyon To Grouse",
              date: new Date("7/21/2018"),
              sun: true,
              rain: false
            },
            {
              trail: "Big Cedar And Kennedy Falls",
              date: new Date("7/28/2018"),
              sun: false,
              rain: true
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
