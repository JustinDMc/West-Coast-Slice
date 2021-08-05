import React, { useState } from 'react'

export default function Orders( {currentUser}) {

    const [seconds, setSeconds] = useState(59)

    function timer(){
        setSeconds(seconds -1)
        // if(seconds = 0){
        //     alert("Pizza is ready!")
        // }
    }

    return (
        <div style={{textAlign: 'center', border: "5px solid black", backgroundColor: "rgba(255,255,255,0.4)", color: "black"}}>
            <div>
                <h1 style={{fontSize: "50px"}}>Order Confirmation</h1> 
                <h3 style={{fontSize: "25px"}}>West Coast Slice - Headband Street <br></br> 789 Headband Street, Los Angeles, CA <br></br> (111)-222-3456 </h3>
                <h5 style={{fontSize: "20px"}}>-- We hope you enjoy your pizza! --</h5>
                <h6 style={{fontSize: "15px"}}>The order below has been confirmed, please phone the restaurant to change or cancel your order.</h6>
            </div>
            <div className="userOrder">
                <hr style={{borderTop: "1px dashed red"}}></hr>
                <p style={{fontWeight: "bold", fontSize: "20px", textAlign: "left"}}>1 X-Large Custom Pizza $18</p>
                <p style={{fontSize: "18px", textAlign: "left"}}><em>Marinara, Mozarella, Pepperoni, Pineapple, Ranch</em></p>
                <p style={{fontSize: "18px", textAlign: "left"}}><em>Notes: Light ranch please!</em></p>
                <p style={{fontWeight: "bold", fontSize: "20px", textAlign: "left"}}>1 Medium Chicken Pesto Pizza <b style={{textAlign: "right"}}>$12</b></p>
                <p style={{fontSize: "18px", textAlign: "left"}}><em>Pesto, Parmesan, Grilled Chicken, Tomato, Artichoke Hearts, Capers, Sri-Rancha</em></p>
                <p style={{fontWeight: "bold", fontSize: "30px", textAlign: "left"}}>Total: $30</p>
                <hr style={{borderTop: "1px dashed red"}}></hr>
                <p onload={setTimeout(timer, 1000)} style={{fontWeight: "bold", fontSize: "30px"}}>How long until ready: 4 minutes: {seconds} seconds</p>
            </div>
        </div>
    )
}


