import React, { useState, useEffect, useContext } from 'react';
import StatBox from '../components/StatBox';
import CalBox from '../components/CalBox';
import axios from 'axios';
import AppDrawer from '../components/AppDrawer';
import { Carousel } from 'react-responsive-carousel';
import { Icons } from '../components/Icons';
import { useNavigate } from "react-router";
import {DevContext} from '../App'



function CalendarPage(props) {


    const url = useContext(DevContext)
 

    const [verified, setVerified] = useState(0);
    const [habits, setHabits] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0)
    const navigate = useNavigate();



    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        axios({

            method: 'post',
            url: `${url}/pageVerify`,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': jwt
            }
        }).then(res => {
            console.log(res.data);
            getHabits();
            // store the returned token into local storage
        }).catch(err => navigate("../", { replace: true }))

    }, []);

    function getHabits() {
        const jwt = localStorage.getItem('jwt');
        axios({
            method: 'post',
            url: `${url}/getHabits`,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': jwt
            },
        }).then(res => {
            setHabits(res.data);
            console.log(res.data);
            console.log("STATS PAGE")
            setVerified(1);
        }).catch(err => console.log("hello"))
    }


    if (verified === 0) {
        return (
            <div></div>
        )
    }
    else 
    return (
        <div className="noSelect" style={{ color: "black", width: "100%" }}>
            <AppDrawer isMobile={props.isMobile}/>
            <br></br>
            <br></br>
            <br></br>
            <div className="container" style={{ width: "100%" }}>


                <div className="row mx-auto justify-content-center align-items-center">
                    
                    <div className="col-lg-6 col-sm-12 my-col">
                        <div className="dashBox" style={{ height: "18vh" }}>
                            <Carousel
                                infiniteLoop="true"
                                showThumbs="false"
                                showArrows="true"
                                onChange={index => setCurrentSlide(index)}>

                                {habits.map((habit, index) => {
                                    return (
                                        <div key={index} style={{ height: "18vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <div style={{ height: "12vh", width: "12vh" }}>

                                                <Icons color={habit.Color} icon={habit.Icon} />
                                                <div style={{ marginTop: "-17%", fontFamily: "Roboto", color: habit.Color }}>{habit.HabitName}</div>
                                            </div>
                                        </div>
                                    )

                                })}
                            </Carousel>
                        </div>
                    </div>
                    
                </div>



                <div className="row justify-content-center align-items-center">
                    
                    <div className="col-lg-6 col-sm-12 my-col">
                        <CalBox  dash={false} Color={habits[currentSlide].Color} Checkins={habits[currentSlide].CheckIns} />
                    </div>
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>

    )
}

export default CalendarPage;