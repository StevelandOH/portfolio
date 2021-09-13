import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const data = [
    {
        className: 'proj this',
        src: 'https://i.postimg.cc/Zq47yccW/Portfolio.png',
        git: 'https://github.com/StevelandOH/portfolio',
        live: 'http://www.stephenthedev.com/',
        alt: 'Portfolio Site',
        tech: 'ReactJS | CSS',
    },
    {
        className: 'proj journ',
        src: 'https://i.postimg.cc/mZ3Mzw0f/Journal.png',
        git: 'https://github.com/StevelandOH/journal-easy',
        live: 'https://journal-easy.herokuapp.com/',
        alt: 'Journal Easy',
        tech: 'Python | ReactJS | SQL | Flask | CSS',
    },
    {
        className: 'proj seen',
        src: 'https://i.postimg.cc/fLy8BPXP/Scenes.png',
        git: 'https://github.com/StevelandOH/seen-scenes',
        live: 'https://seen-scenes-app.herokuapp.com/',
        alt: 'Seen Scenes',
        tech: 'JavaScript | CSS | PugJS',
    },
    {
        className: 'proj dog',
        src: 'https://i.postimg.cc/tgXvw58h/Dogwlkr.png',
        git: 'https://github.com/StevelandOH/dogwlkr',
        live: 'https://dogwlkr.herokuapp.com/',
        alt: 'Dogwlkr',
        tech: 'ReactJS | JavaScript | Express | SQL | CSS',
    },
];

function Projects() {
    return (
        <div className="project-photo-box">
            {data.map((proj) => (
                <div className={proj.className}>
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
                                    class="fas fa-chevron-right"
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
                                    class="fas fa-chevron-right"
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
