import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import me from './../../data/DashboardImage.png';

function Dashboard() {
    return (
        <>
            {/* looks like iMessage */}
            <div className="dashboard-container">
                <div className="dash-top">
                    <div className="top-bumper"></div>
                    <img src={me}></img>
                    <span className="dash-name">Stephen Szelpal</span>
                </div>

                <div className="dash-mid"></div>
                <div className="dash-bottom"></div>
            </div>
        </>
    );
}

export default Dashboard;
