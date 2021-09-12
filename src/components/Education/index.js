import React from 'react';
import './Education.css';

function Education() {
    return (
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
    );
}

export default Education;
