import React, { Component } from 'react';

class HikeDayCount extends Component {
  render() {
    return (
      <div className="hike-day-count">
        <div className="total-days">
          <span>5 days</span>
        </div>
        <div className="sunny-days">
          <span>2 days</span>
        </div>
        <div className="rainy-days">
        <span>1 day</span>
        </div>
      </div>
    );
  }
}

export default HikeDayCount;
