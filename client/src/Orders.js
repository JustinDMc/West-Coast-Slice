import React from 'react'

function Orders( {currentUser}) {
    return (
        <div style={{textAlign: 'center'}}>
                <h1 style={{color: "white", fontSize: "50px"}}>Your Order</h1> 
        <div className="userOrder">
                <h3 style={{fontSize: "30px"}}>Username:</h3>
                <h3 style={{fontSize: "30px"}}>Address:</h3>
                <br></br>
                <br></br>
                <br></br>
                <h3 style={{textDecoration: 'underline', fontSize: "30px"}}>Summary:</h3>
                <p style={{fontWeight: "bold", fontSize: "30px"}}>Pizza(s) you have ordered:</p>
                <p style={{fontWeight: "bold", fontSize: "30px"}}>Total amount:</p>
                <p style={{fontWeight: "bold", fontSize: "30px"}}>How long until ready:</p>
            </div>
        </div>
    )
}

export default Orders
