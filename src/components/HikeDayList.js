import React from "react";
// import { PropTypes } from "prop-types";
import HikeDayRow from "./HikeDayRow";
import { Link } from "react-router-dom";

// import IoIosRainy from "react-icons/lib/io/ios-rainy";
// import IoIosSunny from "react-icons/lib/io/ios-sunny";
// import Calendar from "react-icons/lib/fa/calendar";

const HikeDayList = ({ days, location }) => {
  const filter = location.pathname.replace("/list-days/", "");

  const filteredDays = !filter.match(/sun|rain/)
    ? days
    : days.filter(day => day[filter]);

  return (
    <div className="hike-day-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Trail</th>
            <th>Sun</th>
            <th>Rain</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="/list-days">All Days</Link>
              <Link to="/list-days/sun">Sunny Days</Link>
              <Link to="/list-days/rain">Rainy Days</Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredDays.map((day, i) => <HikeDayRow key={i} {...day} />)}
        </tbody>
      </table>
    </div>
  );
};

HikeDayList.propTypes = {
  days: function(props) {
    if (!Array.isArray(props.days)) {
      return new Error("HikeDayList should be an array");
    } else if (!props.days.length) {
      return new Error("HikeDayList must have at least one record");
    } else {
      return null;
    }
  }
};

export default HikeDayList;
