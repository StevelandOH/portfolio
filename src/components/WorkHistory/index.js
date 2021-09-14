import React from 'react';
import './WorkHistory.css';

function WorkHistory({ job }) {
    return (
        <div className={job.class}>
            <div className="up-dn-box">
                <i className="fas fa-chevron-up"></i>
                <div className="vote">
                    {`${Math.floor(Math.random() * (100 - 10) + 100) / 10}k`}
                </div>
                <i className="fas fa-chevron-down"></i>
            </div>
            <div className="feed-box">
                <div className="split-banner">
                    <div className="rd-banner">
                        <div className="ban-icon"></div>
                        <div className="job-title">{job.title}</div>
                        <div className="loc-length">{job.location}</div>
                    </div>
                    <div style={{ fontSize: '9pt' }}>
                        <div className="join">{job.date}</div>
                    </div>
                </div>
                <div className="jd">{job.jd}</div>
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
    );
}

export default WorkHistory;
