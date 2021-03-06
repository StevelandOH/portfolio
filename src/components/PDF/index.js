import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './PDF.css';

function PDF() {
    return (
        <div className="resume-pdf">
            <NavLink
                onClick={() => window.scrollTo(0, 0)}
                to="/"
                className="home-btn-box"
                style={{ borderBottom: '3px solid #81892' }}
            >
                <i
                    style={{ fontSize: '24pt', color: 'white' }}
                    className="fas fa-chevron-left"
                ></i>

                <div
                    style={{
                        fontSize: '14pt',
                        fontWeight: 'bolder',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    Back to Homepage
                </div>
            </NavLink>
            <div className="res-top">
                <div className="res-icon">
                    <a href="https://postimages.org/">
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
                        onClick={(e) => {
                            e.preventDefault();
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
    );
}

export default PDF;
