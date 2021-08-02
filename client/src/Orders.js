import React from 'react'

function Orders( {currentUser}) {
    return (
        <div style={{textAlign: 'center'}}>
                <h1>Your Order.</h1> 
        <div className="userOrder">
                <h3>Username:</h3>
                <h3>Address:</h3>
                <br></br>
                <br></br>
                <br></br>
                <h3 style={{textDecoration: 'underline'}}>Summery:</h3>
                <p style={{fontWeight: "bold"}}>Pizza you have ordered:</p>
                <p style={{fontWeight: "bold"}}>Total amount:</p>
                <p style={{fontWeight: "bold"}}>How long until ready:</p>
            </div>
        </div>
    )
}

export default Orders
