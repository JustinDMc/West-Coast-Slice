
import React from 'react'
import { useRef } from "react"

export default function Orders( {currentUser}) {
    // Handles the timer for the order status



// ----------------------------- Something I tried ---------------------------------
        // const [status, setStatus] = useState("Cooking in progress.... (15min)")
        // const statusTimer = useRef("Cooking in progress.... (15min)");
        // statusTimer.current = "Cooking in progress.... (15min)";

        // const getstatusTimeout = () => {
        //     setTimeout(() => {
        //         setTimer(statusTimer.current);
        //     }, 3000);
        // };
        
        // const onTimerLoad = () => {
        //     statusTimer.current.focus();
        // }
    
// ----------------------------- Something I tried ---------------------------------
//     const [status, setStatus] = useState("Cooking in progress.... (15min)")

//    function orderTimer(e) {
//         e.preventDefault();
//         const Status = setTimeout(() => console.log("You Order is ready"), 1000)
//         return Status
//    }


    return (
        <div style={{textAlign: 'center'}}>
                <h1 style={{color: "white", fontSize: "50px"}}>{currentUser.username}, here is your order!</h1> 
        <div className="userOrder">
                <h3 style={{fontSize: "30px"}}>Username:</h3>
                <h3 style={{fontSize: "30px"}}>Address:</h3>
                <br></br>
                <br></br>
                <br></br>
                <h3 style={{textDecoration: 'underline', fontSize: "30px"}}>Summary:</h3>
                <p style={{fontWeight: "bold", fontSize: "30px"}}>Pizza(s) you have ordered:</p>
                <p style={{fontWeight: "bold", fontSize: "30px"}}>Total amount:</p>
                <p style={{fontWeight: "bold", fontSize: "30px"}}>
                    How long until ready:
                    </p>
            </div>
        </div>
    )
}


