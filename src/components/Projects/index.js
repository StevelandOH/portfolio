import React from 'react';
import { Link } from 'react-router-dom';
import projData from '../../data/projects';
import './Projects.css';

function Projects() {
    return (
        <div className="project-photo-box">
            {projData.map((proj, i) => (
                <div key={i} className={proj.className}>
                    <div
                        style={{
                            backgroundColor: 'black',
                            height: '180px',
                            width: '220px',
                            borderRadius: '10px',
                            margin: '0 5px 0 5px',
                        }}
                    >
                        <img src={proj.src} alt="Portfolio" />
                    </div>
                    <div className="proj-text">
                        <div className="proj-name">{proj.alt}</div>
                        <div>
                            <Link
                                to="route"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(proj.git);
                                }}
                            >
                                GitHub Repo
                                <i
                                    style={{
                                        marginLeft: '5px',
                                        fontSize: '8pt',
                                    }}
                                    className="fas fa-chevron-right"
                                ></i>
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="route"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(proj.live);
                                }}
                            >
                                Live Site
                                <i
                                    style={{
                                        marginLeft: '5px',
                                        fontSize: '8pt',
                                    }}
                                    className="fas fa-chevron-right"
                                ></i>
                            </Link>
                        </div>
                        <div className="proj-stack">{proj.tech}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
