import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Dashboard.css';
import me from './../../data/DashboardImage.png';
import mesh from './../../data/ReceiverMesh.png';

function Dashboard() {
    return (
        <>
            <div className="dashboard-background">
                {/* looks like iPhone */}
                <div className="phone">
                    {' '}
                    <div className="phone-top">
                        <div className="top-banner">
                            <div className="phone-time">10:00</div>
                            <div className="top-bumper">
                                <img
                                    src={mesh}
                                    className="phone-receiver"
                                ></img>
                                <div className="selfie-cam"></div>
                            </div>
                            <div className="phone-icons">
                                <div className="cell-signal">|||</div>
                                <div className="wifi-signal">///</div>
                                <div className="battery-life">---</div>
                            </div>
                        </div>
                        <div className="arrow-image-container">
                            <div className="text-back-arrow">{'<'}</div>
                            <img className="my-picture" src={me}></img>
                            <div></div>
                        </div>
                        <div className="dash-name">Stephen Szelpal</div>
                    </div>
                    <div className="phone-screen">
                        <div className="text-box">
                            {/* row ONE of 'text' */}
                            <div className="inner-text "></div>
                            <div className="inner-text right">
                                <li>Full Stack Software Engineer</li>
                                <li>Full Stack Software Engineer</li>
                            </div>
                        </div>
                        <div className="text-box">
                            {/* row TWO of 'text'  */}
                            <div className="inner-text left">
                                <li>Full Stack Software Engineer</li>
                                <li>Full Stack Software Engineer</li>
                                <li>Full Stack Software Engineer</li>
                                <li>Full Stack Software Engineer</li>
                            </div>
                            <div className="inner-text "></div>
                        </div>
                        <div className="text-box">
                            {/* row THREE of 'text'  */}
                            <div className="inner-text "></div>
                            <div className="inner-text right">
                                <li>Full Stack Software Engineer</li>
                            </div>
                        </div>
                        <div className="text-box">
                            {/* row FOUR of 'text'  */}
                            <div className="inner-text left">
                                <li>Full Stack Software Engineer</li>
                                <li>Full Stack Software Engineer</li>
                                <li>Full Stack Software Engineer</li>
                            </div>
                            <div className="inner-text "></div>
                        </div>
                    </div>
                    <div className="phone-bottom"></div>
                </div>
            </div>
            <div className="power-button"></div>
        </>
    );
}

export default Dashboard;
