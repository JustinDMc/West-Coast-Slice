import React from 'react'
import { Navbar } from "./styled";
import {NavLink} from "react-router-dom"

function NavBar( { currentUser } ) {
    return (
        <div style={{backgroundColor: "#992b1d", textAlign: "center"}}>
        <h1 className="Title"style={{color: "#262626", margin: "0px"}}>West Coast Slice</h1>
        <Navbar>
            <h4 style={{color: "white"}}>Logged in as: {currentUser.username}</h4>
            {/* <NavLink
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
            </NavLink> */}
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
