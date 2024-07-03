import React, { useState, useEffect, useContext } from 'react';
import StatBox from '../components/StatBox';
import axios from 'axios';
import AppDrawer from '../components/AppDrawer';
import { Carousel } from 'react-responsive-carousel';
import { Icons } from '../components/Icons';
import { useNavigate } from "react-router";
import {DevContext} from '../App'



function StatsPage(props) {


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


                {!props.isMobile ? 
                    <div className="row mx-auto justify-content-center align-items-center">
                    <div className="col-4 my-col">
                        <div className="dashBox" style={{ height: "18vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: habits[currentSlide].Color }}>
                            <h3>Streak:</h3>
                            <h2 style={{ fontFamily: "Roboto" }}>{habits[currentSlide].CheckIns[habits[currentSlide].CheckIns.length - 1].Streak}</h2>
                        </div>

                    </div>
                    <div className="col-4 my-col">
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
                    <div className="col-4 my-col">
                        <div className="dashBox" style={{ height: "18vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: habits[currentSlide].Color }}>
                            <h3>Longest Streak:</h3>
                            <h2 style={{ fontFamily: "Roboto" }}>{habits[currentSlide].CheckIns[habits[currentSlide].CheckIns.length - 1].LongestStreak}</h2>

                        </div>

                    </div>
                </div>
                :

                <div className="row mx-auto justify-content-center align-items-center">
                    <div className="col-12 my-col">
                        <div className="dashBox" style={{ height: "18vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: habits[currentSlide].Color, marginBottom:5 }}>
                            <h3>Streak:</h3>
                            <h2 style={{ fontFamily: "Roboto" }}>{habits[currentSlide].CheckIns[habits[currentSlide].CheckIns.length - 1].Streak}</h2>
                        </div>

                    </div>
                    <div className="col-12 my-col">
                        <div className="dashBox" style={{ height: "18vh",marginBottom:5 }}>
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
                    <div className="col-12 my-col">
                        <div className="dashBox" style={{ height: "18vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: habits[currentSlide].Color,marginBottom:5 }}>
                            <h3>Longest Streak:</h3>
                            <h2 style={{ fontFamily: "Roboto" }}>{habits[currentSlide].CheckIns[habits[currentSlide].CheckIns.length - 1].LongestStreak}</h2>

                        </div>

                    </div>
                </div>
                
                }



                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-sm-12 my-col" style={{ height: "120%" }}>
                        <StatBox GraphType="bar" dash={false} Color={habits[currentSlide].Color} Checkins={habits[currentSlide].CheckIns} noTitle={true} />
                    </div>



                    <div className="col-lg-6 col-sm-12 my-col">
                        <StatBox GraphType="line" dash={false} Color={habits[currentSlide].Color} Checkins={habits[currentSlide].CheckIns} noTitle={true} />
                    </div>
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>

    )
}

export default StatsPage;