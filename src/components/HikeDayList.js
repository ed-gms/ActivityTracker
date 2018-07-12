import React from "react";
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
export default HikeDayList