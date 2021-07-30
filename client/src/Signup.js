import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Signup() {
    return (
        <div style={{textAlign: 'center'}}>
            <form style={{backgroundColor: "white", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "300px", padding: "8px", margin: "auto"}}>
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
                <button>
                    <NavLink to="/">Submit</NavLink>
                </button>
            </form>
        </div>
    )
}
