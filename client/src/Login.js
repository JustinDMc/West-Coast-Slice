import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Login() {
    return (
        <div style={{textAlign: "center", margin: "auto"}}>
            <form style={{backgroundColor: "white", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "300px", margin: "auto"}}>
                <h1>Welcome to West Coast Slice!</h1>
                <h2>Login</h2>
                <input type="text" placeholder="Username"></input>
                <br></br>
                <input type="password" placeholder="Password"></input>
                <br></br>
                <NavLink to="/signup">Sign Up</NavLink>
                <br></br>
                <br></br>
                <button>
                    <NavLink to="/home">Login</NavLink>
                </button>
            </form>
        </div>
    )
}
