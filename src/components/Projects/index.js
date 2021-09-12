import React from 'react';
import './Projects.css';

function Projects() {
    return (
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
    );
}

export default Projects;
