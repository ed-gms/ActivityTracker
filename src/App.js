import React, { Component } from "react";
import "../src/stylesheets/main.css";
import HikeDayList from "./components/HikeDayList";
import HikeDayCount from "./components/HikeDayCount";
import AddDayForm from "./components/AddDayForm";
import Menu from "./components/Menu";
import { Route, Switch } from "react-router-dom";
import HikeDayRow from "./components/HikeDayRow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allHikeDays: [
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
      ]
    };
  }

  countDays = filter => {
    const { allHikeDays } = this.state;
    return allHikeDays.filter(day => (filter ? day[filter] : day)).length;
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <HikeDayCount
                  total={this.countDays()}
                  sun={this.countDays("sun")}
                  rain={this.countDays("rain")}
                />
              );
            }}
          />
          <Route
            path="/list-days"
            render={props => {
              return <HikeDayList days={this.state.allHikeDays} {...props} />;
            }}
          />
          <Route path="/list-days/:filter" component={HikeDayRow} />;
          <Route
            path="/add-day"
            render={() => {
              return <AddDayForm />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
