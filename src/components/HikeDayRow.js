import React from "react";
import IoIosRainy from "react-icons/lib/io/ios-rainy";
import IoIosSunny from "react-icons/lib/io/ios-sunny";
import Calendar from "react-icons/lib/fa/calendar";

const HikeDayRow = ({trail, date, sun, rain}) => (
  <tr>
    <td>
      {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
    </td>
    <td>
      {trail}
    </td>
    <td>
      {(sun) ? <IoIosSunny/> : null}
    </td>
    <td>
      {(rain) ? <IoIosRainy/> : null}
    </td>
  </tr>
);

export default HikeDayRow;