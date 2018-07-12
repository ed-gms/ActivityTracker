import React from "react";
import IoIosRainy from "react-icons/lib/io/ios-rainy";
import IoIosSunny from "react-icons/lib/io/ios-sunny";
import Calendar from "react-icons/lib/fa/calendar";

const percentToDecimal = (decimal) => {
  return decimal * 100 + "%";
};

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal);
};

const HikeDayCount = ({total, sunny, rainy, goal}) => (
  <div className="hike-day-count">
    <div className="total-days">
      <span>{total}</span>
      <Calendar/>
      <span>days</span>
    </div>
    <div className="sunny-days">
      <span>{sunny}</span>
      <IoIosSunny/>
      <span>days</span>
    </div>
    <div className="rainy-days">
      <span>{rainy}</span>
      <IoIosRainy/>
      <span>days</span>
    </div>
    <div>
      <span>{calcGoalProgress(total, goal)}</span>
    </div>
  </div>
);

export default HikeDayCount;
