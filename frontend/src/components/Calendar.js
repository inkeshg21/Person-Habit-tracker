import React from "react";

import Check from "../images/check";

function Calendar(props) {
    var d = new Date();
    var checkinDates = [];

    // calculate how many days are in the current month
    function daysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    var days = [];
    // styling for each day div in the calendar
    const dayStyle = {
        borderBottom: "1px solid white",
        borderLeft: "1px solid white",
        textAlign: "center",
        paddingTop: 5,
        fontSize: 12,
        cursor: "pointer",
        color: "white",
    };
    // styling for whole calendar
    const CalendarStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        height: "100%",
    };

    // create div for each day in the month
    for (var i = 1; i <= daysInMonth(d.getMonth(), d.getFullYear()); i++) {
        if (typeof props.Checkins !== "undefined") {

            // for each day in the month look thru the user checkins 
            // to see if they have a checkin that day
            for (var j = props.dash ? 0 : 1; j < props.Checkins.length; j++) {
                if (props.Checkins[j].Streak !== 0) {
                    var date = new Date(props.Checkins[j].CurrDate);

                    // if there is a checkin save that day to an array
                    if (
                        date.getDate() === i &&
                        date.getFullYear() === d.getFullYear() &&
                        date.getMonth() === d.getMonth()
                    ) {
                        checkinDates.push(i);
                    }
                }
            }
        }
        // create a day component and push to the days array
        days.push(
            <div style={dayStyle} id={"day" + i} key={i}>
                {i}
                <br></br>
                {
                // if there's a checkin include a Check icon
                checkinDates.includes(i) ? (
                    <Check
                        style={{ height: 40 }}
                        key={i}
                        stroke={props.dash ? "#00CC8E" : props.Color}
                    />
                ) : (
                    <></>
                )}
            </div>
        );
    }

    return (
        <div style={CalendarStyle}>
            {days}
            <div
                style={{
                    borderLeft: "1px solid white",
                    borderBottom: "1px solid white",
                    width: "500%",
                }}
            ></div>
        </div>
    );
}

export default Calendar;
