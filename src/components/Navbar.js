import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav style={{color: "black"}}className="nav-bar">
            <NavLink to="/"> โ Home</NavLink> | <NavLink to="/reviews">Your Reviews</NavLink> | <NavLink to="/games">๐พGames๐พ</NavLink> | <NavLink to="/reviews/new">Post New Review ๐</NavLink>
        </nav>
    )
};

export default Navbar;