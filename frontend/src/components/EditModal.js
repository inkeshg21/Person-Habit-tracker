import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Button';
import { iconArr, Icons } from './Icons';
import axios from 'axios';
import {DevContext} from '../App'


//import axios from 'axios';



function EditModal(props) {
  const url = useContext(DevContext)
  const [color, setColor] = useState(props.Color);

  const [desc, setDesc] = useState(props.Description);
  const [occur, setOccur] = useState(props.Occurence);
  const [amount, setAmount] = useState(props.TimesPer);
  const [streak, setStreak] = useState(props.Streak)
  const [lstreak, setLStreak] = useState(props.LongestStreak);




  const [mon, setMon] = useState(props.Occurrence.Mon);
  const [tues, setTues] = useState(props.Occurrence.Tues);
  const [wed, setWed] = useState(props.Occurrence.Wed);
  const [thurs, setThurs] = useState(props.Occurrence.Thurs);
  const [fri, setFri] = useState(props.Occurrence.Fri);
  const [sat, setSat] = useState(props.Occurrence.Sat);
  const [sun, setSun] = useState(props.Occurrence.Sun);








 
  const [editMode, setEditMode] = useState(false);





  useEffect(() => {
    setStreak(props.Streak)
    setLStreak(props.LongestStreak)
  })


  function deleteHabit() {

    const jwt = localStorage.getItem('jwt');

    const habitData = JSON.stringify({

    
      "_id": props._id,
    }
    )

        axios({
            method: 'post',
            url: `${url}/deleteHabit`,
            data: habitData,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': jwt
            },
        }).then(res => {
            console.log(res.data);
           
           props.setRerend((prev)=>!prev)
           props.setProgReload(prev=>!prev)
            closeModal();
            setTimeout(() => { 
                setEditMode(false);
              }, 300);
        }).catch(err => console.log("hello"))
    

  }
  function editHabit() {

    const jwt = localStorage.getItem('jwt');

    const habitData = JSON.stringify({

      "Description": desc,
      "_id": props._id,
      "Color": color,
      "Occurrence": {
        "Mon": mon,
        "Tues": tues,
        "Wed": wed,
        "Thurs": thurs,
        "Fri": fri,
        "Sat": sat,
        "Sun": sun
      },
      "TimesPer": amount
    }
    )

    console.log(habitData);

      try {
        axios({

            method: 'post',
            url: `${url}/editHabit`,
            data: habitData,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': jwt
            },

        }).then(res => {
           

            
            props.setRerend((prev)=>!prev)
            props.setProgReload(prev=>!prev)

            closeModal();
            setTimeout(() => {
                
                setEditMode(false);
              }, 300);






        }).catch(err => console.log("hello"))
    } catch (err) {


    }
  }

  function cancelModal() {

    closeModal();

    setTimeout(() => {
      setEditMode(false);
      setColor(props.Color);

      setDesc(props.Description);
      setAmount(props.TimesPer);
      setOccur(props.Occurrence);

      setMon(props.Occurrence.Mon);
      setTues(props.Occurrence.Tues);
      setWed(props.Occurrence.Wed);
      setThurs(props.Occurrence.Thurs);
      setFri(props.Occurrence.Fri);
      setSat(props.Occurrence.Sat);
      setSun(props.Occurrence.Sun);
      
      setColor(props.Color);
    }, 300);

  }


  const closeModal = async event => {



    props.onHide();




  }




  return (
    <Modal
      scrollable
      backdrop='static'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Header style={{height:"40%"}}>

        <div className="container">
          <div className="row justify-content-center align-items-center mx-auto" >
            <div className="col-6" align="center" style={{ fontFamily: 'Roboto', fontSize: 25, textAlign: "center" }}>
              {props.HabitName}
            </div>

          </div>
          <div className="row justify-content-center align-items-center" style={{ height: 140 }}>
            <div className="col-6 " align="center" style={{ width: 100, height: 100, paddingTop: 30, height: "100%" }}>
              {iconArr[props.Icon]}
            </div>

          </div>
        </div>

      </Modal.Header>


      {

        <Modal.Body>


          <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Description</h8>


          {editMode ? <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(c) => setDesc(c.target.value)}></textarea>
            : <p><strong>{props.Description}</strong> </p>
          }
          <br></br>




          {editMode && <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Occurrence</h8>}
          {editMode && <div className="container">
            <div className="row">
              <div className="form-check col-3">
                {
                  mon ?
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => mon ? setMon(false) : setMon(true)} checked /> :
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => mon ? setMon(false) : setMon(true)} />

                }
                <label className="form-check-label" for="flexCheckDefault">
                  Monday
                </label>
              </div>

              <div className="form-check col-3">
                {
                  tues ?
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => tues ? setTues(false) : setTues(true)} checked /> :
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => tues ? setTues(false) : setTues(true)} />
                }
                <label className="form-check-label" for="flexCheckDefault">
                  Tuesday
                </label>
              </div>

              <div className="form-check col-3">
                {
                  wed ?
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => wed ? setWed(false) : setWed(true)} checked /> :
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => wed ? setWed(false) : setWed(true)} />
                }
                <label className="form-check-label" for="flexCheckDefault">
                  Wednesday
                </label>
              </div>

              <div className="form-check col-3">
                {
                  thurs ?
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => thurs ? setThurs(false) : setThurs(true)} checked /> :
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => thurs ? setThurs(false) : setThurs(true)} />
                }
                <label className="form-check-label" for="flexCheckDefault">
                  Thursday
                </label>
              </div>

              <div className="form-check col-3">
                {
                  fri ?
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => fri ? setFri(false) : setFri(true)} checked /> :
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => fri ? setFri(false) : setFri(true)} />
                }
                <label className="form-check-label" for="flexCheckDefault">
                  Friday
                </label>
              </div>

              <div className="form-check col-3">
                {
                  sat ?
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => sat ? setSat(false) : setSat(true)} checked /> :
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => sat ? setSat(false) : setSat(true)} />
                }
                <label className="form-check-label" for="flexCheckDefault">
                  Saturday
                </label>
              </div>

              <div className="form-check col-3">
                {
                  sun ?
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => sun ? setSun(false) : setSun(true)} checked /> :
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => sun ? setSun(false) : setSun(true)} />
                }
                <label className="form-check-label" for="flexCheckDefault">
                  Sunday
                </label>
              </div>
            </div>
          </div>}


          {editMode && <br></br>}
          {editMode && <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Times Per Occurrence</h8>}


          {editMode && <select class="form-control" id="exampleFormControlSelect1" value={amount} onChange={(c) => setAmount(c.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>


          </select>
          }
          <br></br>


          {!editMode && <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Streak</h8>}
          {!editMode && <p><strong>{streak}</strong></p>}
          <br></br>

          {!editMode && <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Longest Streak</h8>}


          {!editMode && <p><strong>{lstreak}</strong></p>}


          {editMode && <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Choose A Color</h8>}

          {editMode && <div className="container">
            <div className="row" style={{ height: 38, marginTop: 10 }}>
              <div
                className="col-1" style={{ backgroundColor: "#8DCAD4", borderRadius: 100, marginRight: 10, border: color === "#8DCAD4" ? "3px solid red" : "0px solid red" }}
                onClick={() => setColor("#8DCAD4")}></div>
              <div
                className="col-1" style={{ backgroundColor: "#EDBBB4", borderRadius: 100, marginRight: 10, border: color === "#EDBBB4" ? "3px solid red" : "0px solid red" }}
                onClick={() => setColor("#EDBBB4")}></div>
              <div
                className="col-1" style={{ backgroundColor: "#FCB4B6", borderRadius: 100, marginRight: 10, border: color === "#FCB4B6" ? "3px solid red" : "0px solid red" }}
                onClick={() => setColor("#FCB4B6")}></div>
              <div
                className="col-1" style={{ backgroundColor: "#DBABBE", borderRadius: 100, marginRight: 10, border: color === "#DBABBE" ? "3px solid red" : "0px solid red" }}
                onClick={() => setColor("#DBABBE")}></div>
            </div>
            <div className="row" style={{ height: 38, marginTop: 10 }}>
              <div
                className="col-1" style={{ backgroundColor: "#BAA1A7", borderRadius: 100, marginRight: 10, border: color === "#BAA1A7" ? "3px solid red" : "0px solid red" }}
                onClick={() => setColor("#BAA1A7")}></div>
              <div className="col-1" style={{ backgroundColor: "#FCEAC6", borderRadius: 100, marginRight: 10, border: color === "#FCEAC6" ? "3px solid red" : "0px solid red" }}
                onClick={() => setColor("#FCEAC6")}></div>
              <div
                className="col-1" style={{ backgroundColor: "#B7A2CC", borderRadius: 100, marginRight: 10, border: color === "#B7A2CC" ? "3px solid red" : "0px solid red" }}
                onClick={() => setColor("#B7A2CC")}></div>
              <div
                className="col-1" style={{ backgroundColor: "#CDF1AE", borderRadius: 100, marginRight: 10, border: color === "#CDF1AE" ? "3px solid red" : "0px solid red" }}
                onClick={() => setColor("#CDF1AE")}></div>
            </div>
          </div>}


        </Modal.Body>





      }
      <Modal.Footer>

        {editMode && <Button onClick={deleteHabit} variant="secondary">Delete</Button>}
        {editMode && <Button onClick={editHabit} variant="secondary">Save</Button>}
        {!editMode && <Button onClick={() => setEditMode(true)} variant="secondary">Edit</Button>}
        <Button onClick={cancelModal} variant="secondary">Exit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;