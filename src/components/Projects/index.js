import React from 'react';
import { NavLink } from 'react-router-dom';
import jobsArray from '../../data/empData';

import './Projects.css';

function Projects() {
    return (
        <>
            <div className="project-page-container">
                <div className="fake-nav-box">
                    <div className="nav i">
                        <a href="https://postimages.org/" target="_blank">
                            <img
                                src="https://i.postimg.cc/vBjz8FZd/rIcon.png"
                                border="0"
                                alt="rIcon"
                            />
                        </a>
                    </div>
                    <div className="nav search">modeled...</div>
                    <div className="nav login">after</div>
                    <div className="nav signup">Reddit</div>
                    <div className="nav i">
                        <i class="far fa-user"></i>
                    </div>
                </div>
                <div className="proj-header">Recent Projects</div>
                <div className="project-photo-box">
                    <div className="proj this">
                        <a href="https://postimages.org/" target="_blank">
                            <img
                                src="https://i.postimg.cc/Zq47yccW/Portfolio.png"
                                border="0"
                                alt="Portfolio"
                            />
                        </a>
                        hello
                    </div>
                    <div className="proj journ">
                        <a href="https://postimages.org/" target="_blank">
                            <img
                                src="https://i.postimg.cc/mZ3Mzw0f/Journal.png"
                                border="0"
                                alt="Journal"
                            />
                        </a>
                    </div>
                    <div className="proj seen">
                        <a href="https://postimages.org/" target="_blank">
                            <img
                                src="https://i.postimg.cc/fLy8BPXP/Scenes.png"
                                border="0"
                                alt="Scenes"
                            />
                        </a>
                    </div>
                    <div className="proj dog">
                        <a href="https://postimages.org/" target="_blank">
                            <img
                                src="https://i.postimg.cc/tgXvw58h/Dogwlkr.png"
                                border="0"
                                alt="Dogwlkr"
                            />
                        </a>
                    </div>
                </div>
                <div className="project-dropdown-box">
                    <div className="proj-dd this"></div>
                    <div className="proj-dd journ"></div>
                    <div className="proj-dd seen"></div>
                </div>
                <div className="proj-header exp">Education and Experience</div>
                <div className="education-box">
                    <div className="edu app">
                        <div className="edu-text blue">
                            Full Stack Software Engineer
                        </div>
                        <div className="edu-text blue">App Academy</div>
                        <div className="edu-text">2020</div>
                    </div>
                    <div className="edu csu">
                        <div className="edu app">
                            <div className="edu-text blue">
                                'B.A. of Arts (unfinished)'
                            </div>
                            <div className="edu-text blue">
                                Cleveland State University
                            </div>
                            <div className="edu-text">2009</div>
                        </div>
                    </div>
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
