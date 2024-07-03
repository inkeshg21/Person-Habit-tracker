import React, { useEffect, useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/esm/Button';
//import { Button } from '@material-ui/core';
import {iconArr} from './Icons';
import axios from 'axios';
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';
import Button from './Button';
import {DevContext} from '../App'


//import axios from 'axios';



function AddModal(props) {
    const url = useContext(DevContext)
    const [color, setColor] = useState("");
    const [habitName, setHabitName] = useState('');
    const [desc, setDesc] = useState("");
    const [occur, setOccur] = useState("");
    const [amount, setAmount] = useState("");
    const [icon, setIcon] = useState(-1);
    const [enableNext, setEnableNext] = useState(true)
    const [enableSave, setEnableSave] = useState(true)

    const [mon, setMon] = useState(true);
    const [tues, setTues] = useState(true);
    const [wed, setWed] = useState(true);
    const [thurs, setThurs] = useState(true);
    const [fri, setFri] = useState(true);
    const [sat, setSat] = useState(true);
    const [sun, setSun] = useState(true);


    const [showIcons, setShowIcons] = useState(true);
    let date = new Date();
    const occ = { mon, tues, wed, thurs, fri, sat, sun }


  

    const theme = createTheme({
        palette: {
          action: {
            disabledBackground: 'rgb(148,148,148,0.2)',
            disabled: 'rgb(255,255,255,0.3)',
            disabledOpacity: 1,
            
          
          }
        }
      });






    useEffect(() => {

        // Make sure all fields are filled out before enabling next button
        if (color !== "" && habitName !== "" && desc !== "" && amount !== "" &&
            (mon !== false || tues !== false || wed !== false || thurs !== false || fri !== false || sat !== false || sun !== false)) {
            setEnableNext(false)

            // if an icon is chosen allow user to save
            if (icon !== -1) {
                setEnableSave(false)
            }

        }
        else {
            setEnableNext(true)
        }
    })

    const addHabit =  () => {
        // get jwt from local storage
        const jwt = localStorage.getItem('jwt');
        // create habit json
        const habitData = JSON.stringify({
            "HabitName": habitName,
            "Description": desc,
            "Icon": icon,
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
            // make a call to addHabit api with the habit json in the body when the user clicks save
            axios({
                method: 'post',
                url: `${url}/addHabit`,
                data: habitData,
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': jwt
                },
            }).then(res => {
                console.log(res.data);
                // function to trigger the habit lst to rerender
                props.setRerend((prev)=>!prev);
                
                //function to trigger the progress bar to rerender
                props.setProgReload((prev)=>!prev)

                setTimeout(() => {
                    closeModal();
                  }, 300);
            }).catch(err => console.log(err))

    }

// reset all values for future habit creation
    const closeModal = async event => {
        setColor("");
        setHabitName("");
        setDesc("");
        setAmount("");
        setOccur("");
        setIcon(-1);

        setMon(true);
        setTues(true);
        setWed(true);
        setThurs(true);
        setFri(true);
        setSat(true);
        setSun(true);


        props.onHide();
        setEnableNext(true)
        setEnableSave(true)


        setTimeout(() => {
            setShowIcons(true);
        }, 300);

    }



    



    return (
        <>
        
        <Modal
            scrollable
            backdrop='static'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{backgroundColor:"transparent", height: "84%",marginTop: !props?.isMobile ? "5%": "70px"}}
        >

            <Modal.Header
                style=
                {
                    {
                        overflow: "hidden",
                        backdropFilter: "blur(10px)",
                    }
                }>
                <Modal.Title id="example-custom-modal-styling-title" >
                    <h6 style={{ fontWeight:"bold", fontSize: 25 }}>Create Habit</h6>
                </Modal.Title >
            </Modal.Header>
            {
                showIcons ?
                    <Modal.Body 
                        style={{backgroundColor:"transparent"}}>
                        <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Habit Name</h8>
                        <input type="text" className="form-control" placeholder="E.g. Drink Water " value={habitName} onChange={(c) => setHabitName(c.target.value)} />
                        <br></br>
                        <br></br>

                        <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Description</h8>

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(c) => setDesc(c.target.value)}></textarea>



                        <br></br>
                        <br></br>
                        <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Occurrence</h8>
                        <div className="container">
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
                        </div>

                        <br></br>
                        <br></br>

                        <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Times Per Occurrence</h8>

                        <select class="form-control" id="exampleFormControlSelect1" value={amount} onChange={(c) => setAmount(c.target.value)}>
                            <option hidden ></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>


                        </select>



                        <br></br>
                        <br></br>
                        <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Choose A Color</h8>
                        <div className="container">
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
                        </div>


                    </Modal.Body>

                    :

                    <Modal.Body scrollable >
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h8 style={{ fontFamily: 'Roboto', fontSize: 17 }}>Choose An Icon</h8>

                                </div>
                            </div>
                            <div className="row" style={{ marginTop: 40 }}>



                                {iconArr.map((eachIcon, index) => (
                                    <div className="col-lg-2 col-sm-6">
                                        <div style={{ width: 100, height: 100, margin: "5%", padding: 10 }}>
                                            <div style={{ width: "100%", marginTop: -5, borderRadius: 10, border: icon === index ? "3px solid #00CC8E" : "0px solid #00CC8E" }}  key={index} onClick={() => setIcon(index)} >
                                                {eachIcon}
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>



                    </Modal.Body>



            }
            <Modal.Footer
            >
                <ThemeProvider theme={theme}>
                {showIcons ? <Button onClick={() => setShowIcons(false)} variant="contained" size="large" color="primary"  disabled={enableNext} mr={2} ml={2}>Next</Button>
                    : <Button onClick={() => setShowIcons(true)} variant="contained" size="large">Prev</Button>}
                {showIcons ? <></> : <Button onClick={()=>addHabit()} variant="contained" size="large" color="primary" disabled={enableSave} mr={2} ml={2}>Save</Button>}
                <Button onClick={closeModal} variant="contained" size="large">Cancel</Button>
                </ThemeProvider>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default AddModal;