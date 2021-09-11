import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import jobsArray from '../../data/empData';

import './Projects.css';

function Projects() {
    return (
        <>
            <div className="project-page-container">
                <NavLink to="/" className="back-home">
                    <i class="fas fa-chevron-left"></i>
                </NavLink>
                <div className="margin">back</div>
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
                        <img
                            src="https://i.postimg.cc/Zq47yccW/Portfolio.png"
                            border="0"
                            alt="Portfolio"
                        />
                    </div>
                    <div className="proj journ">
                        <img
                            src="https://i.postimg.cc/mZ3Mzw0f/Journal.png"
                            border="0"
                            alt="Journal"
                        />
                    </div>
                    <div className="proj seen">
                        <img
                            src="https://i.postimg.cc/fLy8BPXP/Scenes.png"
                            border="0"
                            alt="Scenes"
                        />
                    </div>
                    <div className="proj dog">
                        <img
                            src="https://i.postimg.cc/tgXvw58h/Dogwlkr.png"
                            border="0"
                            alt="Dogwlkr"
                        />
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
                <div className="flex">
                    <div>
                        {jobsArray.map((job) => (
                            <div className={job.class}>
                                <div className="up-dn-box">
                                    <i class="fas fa-chevron-up"></i>
                                    <div className="vote">
                                        {`${
                                            Math.floor(
                                                Math.random() * (100 - 10) + 100
                                            ) / 10
                                        }k`}
                                    </div>
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                                <div className="feed-box">
                                    <div className="split-banner">
                                        <div className="rd-banner">
                                            <div className="ban-icon"></div>
                                            <div className="job-title">
                                                {job.title}
                                            </div>
                                            <div className="loc-length">
                                                {job.location}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="join">
                                                {job.date}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="jd">{job.jd}</p>
                                    {job.image && (
                                        <div className="job-img">
                                            <img
                                                style={
                                                    job.alt === 'Barrio'
                                                        ? {
                                                              width: '250px',
                                                              height: '250px',
                                                          }
                                                        : null
                                                }
                                                src={job.image}
                                                border="0"
                                                alt={job.name}
                                            ></img>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="resume-pdf">
                        <div className="res-top">
                            <div className="res-icon">
                                <a
                                    href="https://postimages.org/"
                                    target="_blank"
                                >
                                    <img
                                        style={{
                                            height: '50px',
                                            width: '50px',
                                        }}
                                        src="https://i.postimg.cc/PPNBVPhw/Resume-Icon.png"
                                        border="0"
                                        alt="Resume-Icon"
                                    />
                                </a>
                            </div>
                            <div className="header-box">
                                <p className="res-header">Resume PDF</p>
                            </div>
                        </div>
                        <div className="res-lower">
                            <p>Click the button for a PDF of my resume</p>
                        </div>
                        <div className="res-button">
                            <button>
                                <Link
                                    to="route"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        window.open(
                                            'https://pdfhost.io/v/fpaw.QgPh_Stephen_Szelpals_Resume'
                                        );
                                    }}
                                >
                                    <p>Click Here</p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
