import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './PhoneBottom.css';

function PhoneBottom() {
    return (
        <div className="phone-bottom">
            <div className="navlink-container">
                <div>
                    <NavLink
                        to="/stephensawesomeresume"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <img
                            style={{
                                borderRadius: '100px',
                                height: '145px',
                                width: '160px',
                            }}
                            src="https://i.postimg.cc/NFFRdz0L/Resume.png"
                            border="0"
                            alt="Resume"
                        />
                    </NavLink>
                </div>
                <div>
                    <Link
                        to="route"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(
                                'https://www.linkedin.com/in/stephen1010/'
                            );
                        }}
                    >
                        <img
                            style={{
                                borderRadius: '100px',
                                height: '145px',
                                width: '160px',
                            }}
                            src="https://i.postimg.cc/nhGzyL7Q/LinkedIn.png"
                            border="0"
                            alt="LinkedIn"
                        />
                    </Link>
                </div>
                <div>
                    <Link
                        to="route"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open('https://github.com/StevelandOH');
                        }}
                    >
                        <img
                            style={{
                                borderRadius: '100px',
                                height: '145px',
                                width: '160px',
                            }}
                            src="https://i.postimg.cc/Bv89GqwC/github.png"
                            border="0"
                            alt="GH"
                        />
                    </Link>
                </div>
                <div>
                    <Link
                        to="route"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(
                                'https://www.instagram.com/steveland.ohio/'
                            );
                        }}
                    >
                        <img
                            style={{
                                borderRadius: '100px',
                                height: '145px',
                                width: '160px',
                            }}
                            src="https://i.postimg.cc/HxBLPWJ9/Insta.png"
                            border="0"
                            alt="IG"
                        />
                    </Link>
                </div>
            </div>
            <div className="bottom-line"></div>
        </div>
    );
}

export default PhoneBottom;
