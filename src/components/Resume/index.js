import React from 'react';
import { NavLink } from 'react-router-dom';
import Education from '../Education';
import Projects from '../Projects';
import FakeNav from '../FakeNav';
import PDF from '../PDF';
import WorkHistory from '../WorkHistory';

import jobsArray from '../../data/empData';
import './Resume.css';

function Resume() {
    return (
        <>
            <div className="project-page-container">
                <FakeNav />
                <div className="proj-header">Recent Projects</div>
                <Projects />
                <div className="project-dropdown-box">
                    <div className="proj-dd this"></div>
                    <div className="proj-dd journ"></div>
                    <div className="proj-dd seen"></div>
                </div>
                <div className="proj-header exp">Education and Experience</div>
                <Education />
                <div className="flex">
                    <div>
                        {jobsArray.map((job) => (
                            <WorkHistory job={job} />
                        ))}
                    </div>
                    <PDF />
                </div>
            </div>
        </>
    );
}

export default Resume;
