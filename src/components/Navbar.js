import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav-bar">
            <NavLink to="/"> ☞ HOME</NavLink> | <NavLink to="/reviews">Your Reviews</NavLink> | <NavLink to="/reviews/new">Post New Review 📝</NavLink>
        </nav>
    )
};

export default Navbar;