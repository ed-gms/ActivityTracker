import React from "react";
import { PropTypes } from "prop-types";
import HikeDayRow from "./HikeDayRow";
// import IoIosRainy from "react-icons/lib/io/ios-rainy";
// import IoIosSunny from "react-icons/lib/io/ios-sunny";
// import Calendar from "react-icons/lib/fa/calendar";

const HikeDayList = ({ days }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Trail</th>
        <th>Sun</th>
        <th>Rain</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) => 
        <HikeDayRow
          key={i}
          {...day}
        />
      )}
    </tbody>
  </table>
)

HikeDayList.propTypes = {
  days: function(props) {
    if (!Array.isArray(props.days)) {
      return new Error("HikeDayList should be an array");
    } else if(!props.days.length) {
      return new Error("HikeDayList must have at least one record");
    } else {
      return null;
    }
  }
};

export default HikeDayList