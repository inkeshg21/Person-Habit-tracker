import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HabitList from './HabitList';
import quotes from './Quotes';

function MotiBox() {


    const [quote, setQuote] = useState({ q: quotes[Math.floor(Math.random() * 50)].q, a: quotes[Math.floor(Math.random() * 50)].a })

    return (
        <div className="dashBox" id="motiBox">
            <div style={{ left: "20px", top: 12, fontWeight:"bold", position:"absolute" }}>Motivation</div>

            
                    <div style={{  position:"absolute", top:"20%", bottom:"40%", left:0, right:0, margin:10, fontSize:15 }}>
                        <p><i>{quote.q}</i></p>
                        <p><i>- {quote.a}</i></p>
                    </div>
            
        </div>
    )
}

export default MotiBox;