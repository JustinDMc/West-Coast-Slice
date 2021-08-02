import React from 'react'
import { Navbar } from "./styled";
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <div style={{backgroundColor: "black", textAlign: "center"}}>
        <h2 style={{color: "white", margin: "0px"}}>West Coast Slice</h2>
        <Navbar>
            <NavLink
                exact
                activeClassName="active"
                to="/login"
                >Log In
            </NavLink>
            <NavLink
                exact
                activeClassName="active"
                to="/signup"
                >Signup
            </NavLink>
            <NavLink
                exact
                activeClassName="active"
                to="/about"
                >About
                </NavLink>
                <NavLink
                exact
                activeClassName="active"
                to="/home"
                >Home
            </NavLink>
            <NavLink
                exact
                activeClassName="active"
                to="/orders"
                >Orders
            </NavLink>
            <NavLink
                exact
                activeClassName="active"
                to="/login"
                >Logout
            </NavLink>
        </Navbar>
        </div>
    )
}

export default NavBar
