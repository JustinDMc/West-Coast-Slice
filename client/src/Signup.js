import React from 'react';

export default function Signup() {
    return (
        <div>
            <form style={{border: '1px solid black',
                          borderRadius: "8px",
                          maxWidth: "300px",
                          padding: "8px",
                          margin: "0 auto"
                          }}>
                <h1>Signup</h1>
                <input type="text" placeholder="Username"></input>
                <br></br>
                <input type="password" placeholder="Password"></input>
                <br></br>
                <input type="password" placeholder="Confirm password"></input>
                <br></br>
                <input type="text" placeholder="Address"></input>
                <br></br>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
