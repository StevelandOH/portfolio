import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <>
            <div className="nav-container">
                <NavLink className="nav-button" to="/">
                    Dash
                </NavLink>
                <a>|</a>
                <NavLink className="nav-button" to="/stephensawesomeprojects">
                    Projects
                </NavLink>
                <a>|</a>
                <NavLink className="nav-button" to="/stephensawesomeresume">
                    Resume
                </NavLink>
            </div>
        </>
    );
}

export default Navigation;
