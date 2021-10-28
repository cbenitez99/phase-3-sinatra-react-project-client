import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <NavLink to="/"> HOME</NavLink> | <NavLink to="/games">GAMES</NavLink> | <NavLink to="/reviews">REVIEWS</NavLink>
        </nav>
    )
}

export default Navbar;