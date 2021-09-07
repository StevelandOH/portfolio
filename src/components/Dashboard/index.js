import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import me from './../../data/DashboardImage.png';

function Dashboard() {
    return (
        <>
            {/* looks like iMessage */}
            <div className="dashboard-container">
                {' '}
                <div className="dash-top">
                    <div className="top-bumper"></div>
                    <img src={me}></img>
                    <span className="dash-name">Stephen Szelpal</span>
                </div>
                <div className="dash-mid">
                    <div className="text">
                        {/* row ONE of 'text' */}
                        <div className="inner-text "></div>
                        <div className="inner-text right">
                            <li>Full Stack Software Engineer</li>
                            <li>Full Stack Software Engineer</li>
                        </div>
                    </div>
                    <div className="text">
                        {/* row TWO of 'text'  */}
                        <div className="inner-text left">
                            <li>Full Stack Software Engineer</li>
                            <li>Full Stack Software Engineer</li>
                            <li>Full Stack Software Engineer</li>
                            <li>Full Stack Software Engineer</li>
                        </div>
                        <div className="inner-text "></div>
                    </div>
                    <div className="text">
                        {/* row THREE of 'text'  */}
                        <div className="inner-text "></div>
                        <div className="inner-text right">
                            <li>Full Stack Software Engineer</li>
                        </div>
                    </div>
                    <div className="text">
                        {/* row FOUR of 'text'  */}
                        <div className="inner-text left">
                            <li>Full Stack Software Engineer</li>
                            <li>Full Stack Software Engineer</li>
                            <li>Full Stack Software Engineer</li>
                        </div>
                        <div className="inner-text "></div>
                    </div>
                    <div className="text">
                        {/* row FIVE of 'text'  */}
                        <div className="inner-text "></div>
                        <div className="inner-text right">
                            <li>Full Stack Software Engineer</li>
                            <li>Full Stack Software Engineer</li>
                            <li>Full Stack Software Engineer</li>
                            <li>Full Stack Software Engineer</li>
                            <li>Full Stack Software Engineer</li>
                        </div>
                    </div>
                </div>
                <div className="dash-bottom"></div>
            </div>
        </>
    );
}

export default Dashboard;
