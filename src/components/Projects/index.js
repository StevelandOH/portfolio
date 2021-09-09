import React from 'react';
import { NavLink } from 'react-router-dom';
import jobsArray from '../../data/empData';

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
                {jobsArray.map((job) => (
                    <div className={job.class}>
                        <div className="up-dn-box">
                            <div>^</div>
                            <div>78.3k</div>
                            <div>v</div>
                        </div>
                        <div className="feed-box">
                            <div className="rd-banner">
                                <div className="ban-icon"></div>
                                <div className="job-title">{job.title}</div>
                                <div className="loc-length">{job.location}</div>
                                <div className="join">{job.date}</div>
                            </div>
                            <p className="jd">{job.jd}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Projects;
