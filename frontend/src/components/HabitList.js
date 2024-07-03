import React, { useEffect, useState, useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import Habit from './Habit';
import {DevContext} from '../App'
function HabitList(props) {
    const url = useContext(DevContext)
    const [habits, setHabits] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [page1, setPage1] = useState([]);
    const [page2, setPage2] = useState([]);
    const [selected, setSelected] = useState(habits.length > 8 ? 1 : 0)


    useEffect(() => {
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
                
                console.log(habits);
                setLoaded(true);




            }).catch(err => console.log("hello"))
    }, [props.rerend])

    useEffect(() => {
        if (habits.length > 8) {
            setPage1(habits.slice(0, 8));
            setPage2(habits.slice(8, habits.length));
        }
        else {
            setPage1(habits)
            console.log(habits)
        }

    }, [habits, props.rerend])

    useEffect(() => {
        setHabits(habits)
        setSelected(habits.length > 8 ? 1 : 0)
       
    })





    if (loaded && habits.length > 0 && habits.length <= 8 && !props.hPage && !props?.isMobile)
        return (
            <div>

                <Carousel
                    infiniteLoop="true"
                    showThumbs="false"
                    showArrows="true"
                    selectedItem={selected}


                >
                    <div className="container ">
                        <div className="row justify-content-start mx-auto" style={{ height: "auto", }} >

                            {
                                page1.map((habit, index) => {
                                    return (
                                        <div className="col-3 col-auto "  key={index}>

                                            <Habit
                                                Active={habit.Active}
                                                CheckIns={habit.CheckIns}
                                                Color={habit.Color}
                                                Description={habit.Description}
                                                HabitName={habit.HabitName}
                                                Icon={habit.Icon}
                                                Occurrence={habit.Occurrence}
                                                Progress={habit.Progress}
                                                TimesPer={habit.TimesPer}
                                                _id={habit._id}
                                                rerend={props.rerend}
                                                setRerend={props.setRerend}
                                                setProgReload={props.setProgReload}
                                            />

                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>






                </Carousel>
            </div>
        )
    else if (loaded && habits.length > 8 && !props.hPage && !props?.isMobile)
        return (
            <div>
                <Carousel
                    infiniteLoop="true"
                    showThumbs="false"
                    showArrows="true"
                    selectedItem={0}
                    
                    
                >
                    <div className="container ">
                        <div className="row justify-content-start mx-auto" style={{ height: "80%" }} >

                            {
                                page1.map((habit, index) => {
                                    return (
                                        <div className="col-3 col-auto " key={index}>

                                            <Habit
                                                Active={habit.Active}
                                                CheckIns={habit.CheckIns}
                                                Color={habit.Color}
                                                Description={habit.Description}
                                                HabitName={habit.HabitName}
                                                Icon={habit.Icon}
                                                Occurrence={habit.Occurrence}
                                                Progress={habit.Progress}
                                                TimesPer={habit.TimesPer}
                                                _id={habit._id}
                                                setRerend={props.setRerend}
                                                rerend={props.rerend}
                                                setProgReload={props.setProgReload} />

                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>

                    <div className="container ">
                        <div className="row justify-content-start mx-auto" style={{ height: "80%" }} >

                            {
                                page2.map((habit, index) => {
                                    return (
                                        <div className="col-3 col-auto " key={index}>

                                            <Habit
                                                Active={habit.Active}
                                                CheckIns={habit.CheckIns}
                                                Color={habit.Color}
                                                Description={habit.Description}
                                                HabitName={habit.HabitName}
                                                Icon={habit.Icon}
                                                Occurrence={habit.Occurrence}
                                                Progress={habit.Progress}
                                                TimesPer={habit.TimesPer}
                                                _id={habit._id}
                                                setRerend={props.setRerend}
                                                rerend={props.rerend}
                                                setProgReload={props.setProgReload} />

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Carousel>
            </div>
        )




    else if (props.hPage && loaded && habits.length !== 0)
    return(
        <div className="container ">
                        <div className="row justify-content-start mx-auto" style={{ height: "80%", }} >

                            {
                                habits.map((habit, index) => {
                                    return (
                                        <div className="col-3 col-auto " key={index}>

                                            <Habit
                                                Active={habit.Active}
                                                CheckIns={habit.CheckIns}
                                                Color={habit.Color}
                                                Description={habit.Description}
                                                HabitName={habit.HabitName}
                                                Icon={habit.Icon}
                                                Occurrence={habit.Occurrence}
                                                Progress={habit.Progress}
                                                TimesPer={habit.TimesPer}
                                                _id={habit._id}
                                                setRerend={props.setRerend}
                                                rerend={props.rerend}
                                                setProgReload={props.setProgReload} />

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

    )
    else if(props?.isMobile && loaded && habits.length != 0)
        return(
            <>
                        <div  style={{   width:"auto",height:"auto", display:"flex", flexWrap:"wrap", justifyContent:"flex-start",  }} >

                            {
                                habits.map((habit, index) => {
                                    return (
                                        <div key={index} style={{ width:"50%",}}>

                                            <Habit
                                                isMobile={props?.isMobile}
                                                Active={habit.Active}
                                                CheckIns={habit.CheckIns}
                                                Color={habit.Color}
                                                Description={habit.Description}
                                                HabitName={habit.HabitName}
                                                Icon={habit.Icon}
                                                Occurrence={habit.Occurrence}
                                                Progress={habit.Progress}
                                                TimesPer={habit.TimesPer}
                                                _id={habit._id}
                                                setRerend={props.setRerend}
                                                rerend={props.rerend}
                                                setProgReload={props.setProgReload} />

                                        </div>
                                    )
                                })
                            }
                        </div>
                        </>
                  
        )
    else if (loaded && habits.length == 0) {
        return (<div style={{ color: "white", position:"absolute", bottom:"70%", left:"50%",transform: "translateX(-50%)", opacity:0.5 }}>Create A Habit to Get Started!</div>)

    }

    else 
        return (<div style={{ color: "white", position:"absolute", bottom:"70%", left:"50%",transform: "translateX(-50%)", opacity:0.5 }}>loading...</div>)
}

export default HabitList;