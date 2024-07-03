import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BarChart from './BarChart';
import LineGraph from './LineGraph';


function StatBox(props) {

    console.log(props.Checkins)

    return (
        <div className="dashBox" id="calBox">
            {!props.noTitle && <div style={{paddingLeft:"20px", paddingTop:12, fontWeight:"bold"}}>Statistics</div>}
        
            <div id="calBoxInner" style={{ height: "48.7vh", width:"100%", }}>
               
               {props.GraphType == "bar" ? <BarChart Color={props.Color} Checkins={props.Checkins} dash={props.dash}/> :

                <LineGraph Color={props.Color} Checkins={props.Checkins} dash={props.dash}/>}
            </div>
        </div>
    )
}

export default StatBox;

