import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav-bar">
            <NavLink to="/"> ☞ HOME</NavLink> | <NavLink to="/games">👾GAMES👾</NavLink> | <NavLink to="/reviews">Create a Review 📝</NavLink>
        </nav>
    )
}

export default Navbar;