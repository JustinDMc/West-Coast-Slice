import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <form style={{border: '1px solid black',
                          borderRadius: "8px",
                          maxWidth: "300px",
                          padding: "8px",
                          margin: "0 auto"
                          }}>
                <h1>Login</h1>
                <input type="text" placeholder="Username"></input>
                <br></br>
                <input type="password" placeholder="Password"></input>
                <br></br>
                <NavLink
                to="/signup"
                exact
                >Sign Up
                </NavLink>
                <br></br>
                <br></br>
                <button>Login</button>
            </form>
        </div>
    )
}
