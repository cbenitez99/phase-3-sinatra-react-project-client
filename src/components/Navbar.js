import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav style={{color: "black"}}className="nav-bar">
            <NavLink to="/"> ☞ Home</NavLink> | <NavLink to="/reviews">Your Reviews</NavLink> | <NavLink to="/games">👾Games👾</NavLink> | <NavLink to="/reviews/new">Post New Review 📝</NavLink>
        </nav>
    )
};

export default Navbar;