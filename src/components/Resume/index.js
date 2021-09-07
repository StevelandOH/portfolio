import React from 'react';
import { NavLink } from 'react-router-dom';
import './Resume.css';

function Resume() {
    return (
        <>
            <h1 className="home">{':( Sorry... underconstruction...'}</h1>
            <NavLink className="home" to="/">
                {'< Go Back To Homepage'}
            </NavLink>
        </>
    );
}

export default Resume;
