import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HabitList from "./HabitList";
import AddModal from "./AddModal";
import Button from "react-bootstrap/esm/Button";

function HabitBox(props) {
    const [modalShow, setModalShow] = React.useState(false);
    //state for rerendering the habitlist
    const [rerend, setRerend] = useState(false);

    if (!props?.isMobile)
        return (
            <>

                <div className="dashBox" id={props.hPage ? "habitPageBox" : "habitBox"}>
                    <div style={{ position: "absolute", left: 20, top: 12, fontWeight:"bold" }}>Habits</div>
                    <Button
                        variant="secondary"
                        onClick={() => setModalShow(true)}
                        style={{
                            color: "white",
                            backgroundColor: "transparent",
                            width: "40px",
                            position: "absolute",
                            top: "-7px",
                            right: 20,
                            height: "50px",
                            border: "3px solid white",
                            fontSize: 20,
                            fontWeight: "bold",
                            borderBottomRightRadius: 5,
                            borderBottomLeftRadius: 5,
                            opacity: 0.7
                        }}
                    >
                        +
                    </Button>


                    <div style={{ position: "absolute", width: "100%", height: "70%", borderRadius: 0, bottom: "0 !important", marginBottom: "0px !important", bottom: 15 }}>
                        <div style={{ position: "relative", height: "100%", width: "100%" }}>
                            <HabitList rerend={rerend} setRerend={setRerend} setProgReload={props.setProgReload} hPage={props.hPage} />
                        </div>
                    </div>
                </div>
                <AddModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    setRerend={setRerend}
                    setProgReload={props.setProgReload}
                />
            </>
        );
    else
        return (
            <>

               
                    <div style={{ position: "fixed", left: 20, top: 60, fontWeight:"bold", color:"white" }}>Habits</div>
                    <Button
                        variant="secondary"
                        onClick={() => setModalShow(true)}
                        style={{
                            color: "white",
                            backgroundColor: "transparent",
                            width: "40px",
                            position: "fixed",
                            top: "53px",
                            right: 20,
                            height: "50px",
                            border: "3px solid white",
                            fontSize: 20,
                            fontWeight: "bold",
                            borderBottomRightRadius: 5,
                            borderBottomLeftRadius: 5,
                            opacity: 0.7
                        }}
                    >
                        +
                    </Button>


                    <div style={{ width: "100vw", height:"auto", borderRadius: 0,  marginTop: "60px", display:"flex", justifyContent:"center"}}>
                        
                     
                            <HabitList rerend={rerend} setRerend={setRerend} setProgReload={props.setProgReload} isMobile={props?.isMobile} hPage={false} />
                    
                    </div>
          
                <AddModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    setRerend={setRerend}
                    setProgReload={props.setProgReload}
                    isMobile={props?.isMobile}
                />
            </>
        );

}



export default HabitBox;
