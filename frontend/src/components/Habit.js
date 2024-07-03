import React, { useState, useEffect, useContext } from "react";

import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { Checkmark } from "react-checkmark";

import {  Icons } from "./Icons";
import axios from "axios";
import EditModal from "./EditModal";
import { DevContext } from "../App";
import { ReactComponent as Edit } from "../images/edit.svg";
import { ReactComponent as Undo } from "../images/undo.svg";

function Habit(props) {
  const url = useContext(DevContext);
  // habit properties
  const [percent, setPercent] = useState(props.Progress.Percent);
  const [timesPer, setTimesPer] = useState(props.TimesPer);
  const [hover, setHover] = useState(!props?.isMobile ? false: true);
  const [modalShow, setModalShow] = useState(false);
  const [streak, setStreak] = useState(0);
  const [lstreak, setLStreak] = useState(0);

  useEffect(() => {
    setPercent(props.Progress.Percent);
    setTimesPer(props.TimesPer);
  }, [props.rerend]);

  useEffect(() => {
    props.setRerend((prev)=>!prev)
  }, [props.Progress.Percent]);

  const increasePercent = () => {
    if (props.Active) {
      if (percent < 100) {
        setPercent(percent + 100 / timesPer);
      }

      const jwt = localStorage.getItem("jwt");

      const dataInfo = JSON.stringify({ _id: props._id });

      try {
        axios({
          method: "post",
          url: `${url}/updatePercent`,
          data: dataInfo,
          headers: {
            "Content-Type": "application/json",
            "auth-token": jwt,
          },
        })
          .then((res) => {
            props.setProgReload(prev=>!prev)
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const decreasePercent = () => {
    if (props.Active) {
      if (percent > 0) {
        setPercent(percent - 100 / timesPer);
      }
      const jwt = localStorage.getItem("jwt");
      const dataInfo = JSON.stringify({ _id: props._id });

      try {
        axios({
          method: "post",
          url: `${url}/undoPercent`,
          data: dataInfo,
          headers: {
            "Content-Type": "application/json",
            "auth-token": jwt,
          },
        })
          .then((res) => {
            // console.log(res);
            props.setProgReload(prev=>!prev)
          })
          .catch((err) => console.log("error"));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const updateInfo = () => {
    const jwt = localStorage.getItem("jwt");
    const dataInfo = JSON.stringify({ _id: props._id });

    try {
      axios({
        method: "post",
        url: `${url}/getStreak`,
        data: dataInfo,
        headers: {
          "Content-Type": "application/json",
          "auth-token": jwt,
        },
      })
        .then((res) => {
          setStreak(res.data.Streak);
          setLStreak(res.data.LongestStreak);
          setModalShow(true);
        })
        .catch((err) => console.log("error"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="container-fluid, my-habit "
      style={{
        marginBottom: 0,
        width: "100%",
        opacity: props.Active ? 1 : 0.5,
      }}
    >
      <div style={{ backgroundColor: "black" }}></div>

      {/* The progress bar takes the full width of the div */}
      <div
        style={!props?.isMobile ? { width: "14vmin", height: "14vmin", padding: 0 }: { width: "35vw", maxWidth:"150px", maxHeight:"150px", height: "35vw", padding: 0 }}
        className="row justify-content-center align-items-center my-row2 mx-auto "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* On click, the percent will change based on the  */}
        <div
          onClick={props.Active ? increasePercent : updateInfo}
          style={{ cursor: props.Active && "pointer" }}
          className="col"
        >
          <CircularProgressbarWithChildren
            value={percent}
            background="false"
            styles={buildStyles({
              pathColor: props.Color,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "none",
            })}
          >
            <div
              style={{
                position: "absolute",
                backgroundColor: "black",
                textAlign: "center",
                height: "15%",
                width: "100%",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: "13px",
                opacity: hover && !props.Active ? 1 : 0,
                padding: 1,
              }}
            >
              NOT ACTIVE
            </div>
            {
              percent >= 100 ? (
                <Checkmark size="100%" color={props.Color} />
              ) : (
                <Icons color={props.Color} icon={props.Icon} />
              )
              
            }{" "}
          </CircularProgressbarWithChildren>
        </div>
      </div>

      <div
        className="row  justify-content-center align-items-start my-row2 mx-auto"
        style={{ width: "100%", height: 40 , }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="col-4 my-col d-flex justify-content-center lesspadding"
          style={{ cursor: props.Active && "pointer", width:"20%" }}
          onClick={updateInfo}
        >
          <Edit
            fill={props.Color}
            style={{
              minWidth: "20px",
              marginTop: 10,
              opacity: hover && props.Active || props?.isMobile ? 1 : 0,
              cursor: props.Active && "pointer",
            }}
          />
        </div>
        <div
          className="col-4 my-col d-flex justify-content-center align-items-center"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            fontSize: !props?.isMobile ? "1.8vmin" : "14px",
            overflowWrap:"anywhere",
            padding: 0,
            width:"60%",
            color: props.Color,
          }}
        >
          {props.HabitName}{" "}
        </div>
        <div
          className="col-4 my-col lesspadding"
          style={{ cursor: props.Active && "pointer", width:"20%" }}
          onClick={decreasePercent}
        >
          <Undo
            fill={props.Color}
            style={{
              minWidth: "20px",
              marginTop: 10,
              opacity: hover && props.Active || props?.isMobile ? 1 : 0,
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <EditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        HabitName={props.HabitName}
        Description={props.Description}
        Occurrence={props.Occurrence}
        TimesPer={props.TimesPer}
        Color={props.Color}
        Icon={props.Icon}
        _id={props._id}
        Progress={props.Progress}
        CheckIns={props.CheckIns}
        Streak={streak}
        LongestStreak={lstreak}
        setRerend={props.setRerend}
        setProgReload={props.setProgReload}
      />
    </div>
  );
}

export default Habit;
