import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                All movies
            </NavLink>
            <NavLink exact to="/sort" activeClassName="nav-active">
                Sort movies
            </NavLink>
            <NavLink exact to="/search" activeClassName="nav-active">
                Search movies
            </NavLink>
        </div>
    )
}

export default Navigation;