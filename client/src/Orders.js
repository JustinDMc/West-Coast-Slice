import React, { useState } from 'react'

export default function Orders( {currentUser}) {

    const [seconds, setSeconds] = useState(10)

    const [pending, setPending] = useState(<b style={{color: "red"}}>Pending</b>)
    const [delivered, setDelivered] = useState(<b style={{color: "black"}}>Delivered</b>)

    function timer(){
        setSeconds(seconds -1)
        if (seconds === 1) {
            setPending(<b style={{color: "black"}}>Pending</b>)
            setDelivered(<b style={{color: "green"}}>Delivered</b>)
            setSeconds(0)
        }
    }

    return (
        <div style={{justifyContent: "center", textAlign: 'center', border: "5px solid black", backgroundColor: "rgba(255,255,255,0.4)", color: "black", marginLeft: "200px", marginRight: "200px"}}>
            <div>
                <h1 style={{fontSize: "50px"}}>Order Confirmation</h1> 
                <h3 style={{fontSize: "25px"}}>West Coast Slice - Headband Street <br></br> 789 Headband Street, Los Angeles, CA <br></br> (111)-222-3456 </h3>
                <h5 style={{fontSize: "20px"}}>-- We hope you enjoy your pizza! --</h5>
                <h6 style={{fontSize: "15px"}}>The order below has been confirmed, please phone the restaurant to change or cancel your order.</h6>
                <h5 style={{fontSize: "20px"}}>Delivery Status: {pending} || {delivered}</h5>
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
                {seconds >= 1 ?                 
                <p onload={setTimeout(timer, 1000)} style={{fontWeight: "bold", fontSize: "30px"}}>How long until ready: 0 minutes: {seconds} seconds</p> 
                : null}
            </div>
        </div>
    )
}


