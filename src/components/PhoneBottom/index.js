import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './PhoneBottom.css';

function PhoneBottom() {
    return (
        <div className="phone-bottom">
            <div className="big-bottom">
                <NavLink to="/stephensawesomeresume">
                    <img
                        style={{
                            margin: '20px 0 0 20px',
                            borderRadius: '10px',
                            height: '95px',
                        }}
                        src="https://i.postimg.cc/NFFRdz0L/Resume.png"
                        border="0"
                        alt="Resume"
                    />
                </NavLink>
                <Link
                    to="route"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('https://www.linkedin.com/in/stephen1010/');
                    }}
                >
                    <img
                        style={{
                            margin: '20px 0 0 20px',
                            borderRadius: '10px',
                            height: '95px',
                        }}
                        src="https://i.postimg.cc/nhGzyL7Q/LinkedIn.png"
                        border="0"
                        alt="LinkedIn"
                    />
                </Link>
                <Link
                    to="route"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('https://github.com/StevelandOH');
                    }}
                >
                    <img
                        style={{
                            margin: '20px 0 0 20px',
                            borderRadius: '10px',
                            height: '95px',
                        }}
                        src="https://i.postimg.cc/Bv89GqwC/github.png"
                        border="0"
                        alt="GH"
                    />
                </Link>
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
                            margin: '20px 0 0 20px',
                            borderRadius: '10px',
                            height: '95px',
                        }}
                        src="https://i.postimg.cc/HxBLPWJ9/Insta.png"
                        border="0"
                        alt="IG"
                    />
                </Link>
            </div>
            <div className="bottom-line-space"></div>
            <div className="bottom-line"></div>
        </div>
    );
}

export default PhoneBottom;
