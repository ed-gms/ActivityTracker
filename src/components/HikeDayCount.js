import React from "react";
import { PropTypes } from "prop-types";
import IoIosRainy from "react-icons/lib/io/ios-rainy";
import IoIosSunny from "react-icons/lib/io/ios-sunny";
import Calendar from "react-icons/lib/fa/calendar";

const percentToDecimal = (decimal) => {
  return decimal * 100 + "%";
};

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal);
};

const HikeDayCount = ({total=70, sun=20, rain=10, goal=100}) => (
  <div className="hike-day-count">
    <div className="total-days">
      <span>{total}</span>
      <Calendar/>
      <span>days</span>
    </div>
    <div className="sunny-days">
      <span>{sun}</span>
      <IoIosSunny/>
      <span>days</span>
    </div>
    <div className="rainy-days">
      <span>{rain}</span>
      <IoIosRainy/>
      <span>days</span>
    </div>
    <div>
      <span>{calcGoalProgress(total, goal)}</span>
    </div>
  </div>
);

HikeDayCount.propTypes = {
  total: PropTypes.number,
  sun: PropTypes.number,
  rain: PropTypes.number,
  goal: PropTypes.number
};

export default HikeDayCount;
