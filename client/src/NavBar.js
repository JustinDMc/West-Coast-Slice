import React from 'react'
import { Navbar } from "./styled";
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <Navbar>
            <h1>West Coast Slice</h1>
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
    )
}

export default NavBar
