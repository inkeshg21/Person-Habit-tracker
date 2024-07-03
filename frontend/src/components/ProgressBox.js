import React, { useState, useEffect, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";
import {DevContext} from '../App'
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: "4.5vh",
    borderRadius: 5,
    border: "0.5px solid white",
    width:"60vw"
  },
  colorPrimary: {
    
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#00CC8E",
    boxShadow: " 0 0 5px white",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function ProgressBox(props) {
  const url = useContext(DevContext)
  const [percent, setPercent] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    console.log("RUNNING")
    const jwt = localStorage.getItem('jwt');

    try {
        axios({

            method: 'post',
            url: `${url}/getProgress`,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': jwt
            },

        }).then(res => {
            
            
            console.log(res.data);
            setPercent(res.data.percent * 100)
            props.setCompleteDay(res.data.completeDay)
            console.log(res.data.completeDay)
            




        }).catch(err => console.log("hello"))
    } catch (err) {

    }

}, [props.rerend])

  return (
    <div className="dashBox" id="progressBox" style={{ alignItems: "center",  }}>
      <div style={{paddingLeft:"20px", paddingTop:12, marginBottom:-20, fontWeight:"bold"}}>Progress</div>
      <div
        style={{
          
          width: "100%",
          height: "10.5vh",
         alignItems:"center",
          display: "flex",
          flexDirection: "column",
         
          justifyContent:"center"

        }}
      >
        <div className={classes.root}>
          {/* <FacebookCircularProgress /> */}
          <br />
          <BorderLinearProgress variant="determinate" value={percent} />
        </div>
      </div>
    </div>
  );
}

export default ProgressBox;
