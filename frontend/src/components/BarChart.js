import React from 'react'
import { Bar } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels';

//override chartjs default values
defaults.font.family = "'Roboto', sans-serif";
defaults.color = "white";
defaults.scale.display = true;
defaults.scale.grid.display = false;
defaults.plugins.legend.display = false;

function BarChart(props) {

    var mon = 0, tues = 0, wed = 0, thurs = 0, fri = 0, sat = 0, sun = 0

    // iterate thru all of the users habits 
    // find out which days there are Checkins
    if (typeof props.Checkins !== "undefined")
        for (var i = props.dash ? 0 : 1; i < props.Checkins.length; i++) {
            if (props.Checkins[i].Streak !== 0) {
                var date = new Date(props.Checkins[i].CurrDate)

                // increment day variable if there is a checkin on that week day
                switch (date.getDay()) {
                    case 0:
                        sun = sun + 1
                        break;

                    case 1:
                        mon = mon + 1
                        break;
                    case 2:
                        tues = tues + 1
                        break;
                    case 3:
                        wed = wed + 1
                        break;
                    case 4:
                        thurs = thurs + 1
                        break;
                    case 5:
                        fri = fri + 1
                        break;
                    case 6:
                        sat = sat + 1
                        break;
                    default:
                        break;
                }
            }

        }
    return (
        <div className="container">
            <div className="row" style={{ width: "100%" }} >
                <div className="col" style={{ fontFamily: "Roboto", color: "white" }}>
                    <Bar
                        data={{
                            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
                            fontFamily: 'Bungee',
                            color: 'white',
                            fontSize: 30,
                            datasets: [
                                {
                                    data: (typeof props.Checkins !== "undefined") ? [mon, tues, wed, thurs, fri, sat, sun] : [5, 8, 3, 6, 9, 3, 6],
                                    backgroundColor: (typeof props.Color !== "undefined") ? props.Color : '#00CC8E',
                                    borderRadius: 5,
                                    border: 2,
                                    borderColor: "#000"
                                }
                            ]
                        }}
                        width={300}
                        height={330}
                        var options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{ gridLines: { display: false }, ticks: { fontSize: 12, fontFamily: "'Roboto', sans-serif", fontColor: '#fff', fontStyle: '500', beginAtZero: 'true' } }],
                                xAxes: [{ gridLines: { display: false }, ticks: { fontSize: 12, fontFamily: "'Roboto', sans-serif", fontColor: '#fff', fontStyle: '500' } }]
                            },
                            legend: {
                                display: false //This will do the task
                            }
                        }
                        }
                    ></Bar>
                </div>
            </div>
        </div>
    )
}

export default BarChart