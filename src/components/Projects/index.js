import React from 'react';
import { NavLink } from 'react-router-dom';
import './Projects.css';

function Projects() {
    return (
        <>
            <div className="project-page-container">
                <div className="fake-nav-box">
                    <div className="nav i">i</div>
                    <div className="nav search">search</div>
                    <div className="nav login">lgin</div>
                    <div className="nav signup">signup</div>
                    <div className="nav i">i</div>
                </div>
                <div className="project-photo-box">
                    <div className="proj this"></div>
                    <div className="proj journ"></div>
                    <div className="proj seen"></div>
                </div>
                <div className="project-dropdown-box">
                    <div className="proj-dd this"></div>
                    <div className="proj-dd journ"></div>
                    <div className="proj-dd seen"></div>
                </div>
                <div className="education-box">
                    <div className="edu app"></div>
                    <div className="edu csu"></div>
                </div>
                <div className="job swe">
                    <div className="up-dn-box">
                        <div>^</div>
                        <div>78.3k</div>
                        <div>v</div>
                    </div>
                    <div className="feed-box">
                        <div className="rd-banner">
                            <div className="ban-icon"></div>
                            <div className="job-title">r/ FullStack SWE</div>
                            <div className="loc-length">
                                {' - Worked for e/Transition Studios'}
                            </div>
                            <div className="join">3.21 | curr</div>
                        </div>
                        <p className="jd">
                            Conceived and executed development for a web/mobile
                            video streaming application. It was developed in
                            Typescript, for the frontend I used an Expo build.
                            For the backend, I utilized AWS Amplify. This
                            streaming application also uses React-Native and
                            GraphQL, built to integrate 10,000 subscribers.
                        </p>
                    </div>
                </div>
                <div className="job actor">
                    <div className="up-dn-box">
                        <div>^</div>
                        <div>123.5k</div>
                        <div>v</div>
                    </div>
                    <div className="feed-box">
                        <div className="rd-banner">
                            <div className="ban-icon"></div>
                            <div className="job-title">r/ Actor</div>
                            <div className="loc-length">
                                {' - Worked for e/Television & Film '}
                            </div>
                            <div className="join">11.18 | 2.20</div>
                        </div>
                        <p className="jd">
                            Committed 12+ hrs each day for production working
                            out of NewYork garnering and maintaining strong
                            relationships with casting directors and producers.
                        </p>
                    </div>
                </div>
                <div className="job dog">
                    <div className="up-dn-box">
                        <div>^</div>
                        <div>4.9k</div>
                        <div>v</div>
                    </div>
                    <div className="feed-box">
                        <div className="rd-banner">
                            <div className="ban-icon"></div>
                            <div className="job-title">r/ Owner</div>
                            <div className="loc-length">
                                {' - Worked for e/Ohio City Dog Haven'}
                            </div>
                            <div className="join">4.13 | 2.16</div>
                        </div>
                        <p className="jd">
                            Instantiated a brick and mortar LLC as
                            sole-proprietor and produced an average annual
                            revenue of $90000. Utilized QuickBooks for day to
                            day and negotiated contracts and pricing with
                            distributors and manufacturers as well as
                            consignments for local artists.
                        </p>
                    </div>
                </div>
                <div className="job barrio">
                    <div className="up-dn-box">
                        <div>^</div>
                        <div>50.3k</div>
                        <div>v</div>
                    </div>
                    <div className="feed-box">
                        <div className="rd-banner">
                            <div className="ban-icon"></div>
                            <div className="job-title">r/ Bartender</div>
                            <div className="loc-length">
                                {' - Worked for e/Barrio Tacos and Tequila'}
                            </div>
                            <div className="join">3.15 | 2.20</div>
                        </div>
                        <p className="jd">
                            Cultivated a large group of regular customers, a few
                            turned into longtime friends.
                        </p>
                    </div>
                </div>
                <div className="job shooters">
                    <div className="up-dn-box">
                        <div>^</div>
                        <div>21.1k</div>
                        <div>v</div>
                    </div>
                    <div className="feed-box">
                        <div className="rd-banner">
                            <div className="ban-icon"></div>
                            <div className="job-title">r/ Manager</div>
                            <div className="loc-length">
                                {' - Worked for e/Shooters Restaurant'}
                            </div>
                            <div className="join">4.09 | 10.12</div>
                        </div>
                        <p className="jd">
                            Scheduled a staff of over 100 employees, spanning 7
                            different bars, which would revenue $100k+ on days
                            in the summer.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
