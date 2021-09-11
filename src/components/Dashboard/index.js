import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AnalogClock from 'analog-clock-react';
import emailjs from 'emailjs-com';
import './Dashboard.css';
import me from './../../images/Me.png';
import mesh from './../../images/Mesh.png';

const clockStyle = {
    width: '35px',
    border: true,
    marginTop: '25px',
    borderColor: '#000000',
    baseColor: '#dddddd',
    handColors: {
        second: '#ff0000',
        minute: '#000000',
        hour: '#000000',
    },
};

function Dashboard() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [messageClicked, setMessageClicked] = useState(false);

    const emailInputValidator = () => {
        if (email === '') {
            setError(true);
            alert('Need to include an email');
        }
        if (message === '') {
            setError(true);
            alert('What would you like your message to Stephen be?');
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailInputValidator();
        if (!error) {
            emailjs
                .sendForm(
                    'service_hwpthoe',
                    'template_8dskp6b',
                    e.target,
                    'user_RDjCcUt4W1HQqpv05bcaX'
                )
                .then(
                    (res) => {
                        console.log(res);
                    },
                    (err) => {
                        console.log(err.text);
                    }
                );
            setEmail('');
            setMessage('');
        } else {
            setError(false);
        }
    };

    return (
        <>
            <div className="dashboard-background">
                {/* looks like iPhone */}
                <div className="phone">
                    {' '}
                    <div className="phone-top">
                        <div className="top-banner">
                            <div
                                style={{
                                    padding: '5px 30px 5px 5px',
                                }}
                            >
                                <AnalogClock {...clockStyle} />
                            </div>
                            <div className="top-bumper">
                                <img
                                    src={mesh}
                                    className="phone-receiver"
                                ></img>
                                <div className="selfie-cam"></div>
                            </div>
                            <div className="phone-icons">
                                <div className="icon fir">
                                    <i class="fas fa-signal"></i>
                                </div>
                                <div className="icon mid">
                                    <i class="fas fa-wifi"></i>
                                </div>
                                <div className="icon las">
                                    <i class="fas fa-battery-three-quarters"></i>
                                </div>
                            </div>
                        </div>
                        <div className="arrow-image-container">
                            <div className="text-back-arrow">{'<'}</div>
                            <img className="my-picture" src={me}></img>
                            <div></div>
                        </div>
                        <div className="dash-name">Stephen Szelpal</div>
                    </div>
                    <div className="phone-screen">
                        <div className="text-box">
                            {/* row ONE of 'text' */}
                            <div className="inner-text "></div>
                            <div className="inner-text right t1">
                                <p>I'm a Full Stack Software Engineer...</p>
                            </div>
                        </div>
                        <div className="text-box">
                            {/* row TWO of 'text'  */}
                            <div className="inner-text left t2">
                                <p>
                                    ...who's a problem solver, I believe in
                                    empathy first, I’m a strong communicator, a
                                    self-starter, an insatiable questioner and I
                                    absolutely love to build stuff!
                                    <br />
                                    <br />
                                    <p>
                                        Since I started to code in March of
                                        2020, everyday has been humbling and a
                                        great learning experience. I never in my
                                        life thought I would get so much joy out
                                        of playing with a Python or React
                                        Library as well as the excitement I get
                                        from reading about additions into
                                        JavaScript's es6...
                                    </p>
                                </p>
                            </div>
                            <div className="inner-text "></div>
                        </div>
                        <div className="text-box">
                            {/* row THREE of 'text'  */}
                            <div className="inner-text "></div>
                            <div className="inner-text right t3">
                                <p>Some tech experience includes -</p>
                            </div>
                        </div>
                        <div className="text-box">
                            {/* row FOUR of 'text'  */}
                            <div className="inner-text left t4">
                                <p>
                                    Python - JavaScript - React - React-Native -
                                    SQL - RESTful API - Redux - Flask - Node.js
                                    - CSS - Express - GraphQL - AWS - HTML{' '}
                                </p>
                            </div>
                            <div className="inner-text "></div>
                        </div>
                        <div className="text-box">
                            {/* row FIVE of 'text'  */}
                            <div className="inner-text left t5">
                                <p>...</p>
                            </div>
                            <div className="inner-text "></div>
                        </div>
                    </div>
                    <form className="contact-box" onSubmit={sendEmail}>
                        <div
                            className={
                                messageClicked ? 'contact hidden' : 'contact '
                            }
                        >
                            <div className="here">Contact via</div>
                            <i class="fas fa-envelope"></i>
                        </div>
                        <input
                            className={
                                messageClicked ? 'email' : 'email hidden'
                            }
                            placeholder="EMAIL"
                            type="email"
                            name="user_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            className={
                                messageClicked ? 'message' : 'message long'
                            }
                            placeholder="message here"
                            name="message"
                            value={message}
                            onClick={() => setMessageClicked(true)}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            value="Send"
                            className="email-submit"
                        >
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <div className="phone-bottom">
                        <div className="big-bottom">
                            <NavLink
                                className="p-button"
                                to="/stephensawesomeprojects"
                            >
                                mY
                            </NavLink>
                            <NavLink
                                className="r-button"
                                to="/stephensawesomeresume"
                            >
                                <img
                                    style={{
                                        borderRadius: '10px',
                                        height: '50px',
                                        marginTop: '10px',
                                    }}
                                    src="https://i.postimg.cc/nhGzyL7Q/LinkedIn.png"
                                    border="0"
                                    alt="LinkedIn"
                                />
                            </NavLink>
                            <NavLink
                                className="x-button"
                                to="/stephensawesomeresume"
                            >
                                <img
                                    src="https://i.postimg.cc/cJ5Xc0FV/GH.png"
                                    border="0"
                                    alt="GH"
                                />
                            </NavLink>
                            <NavLink
                                className="y-button"
                                to="/stephensawesomeresume"
                            >
                                <img
                                    style={{
                                        borderRadius: '10px',
                                        height: '50px',
                                        marginTop: '10px',
                                    }}
                                    src="https://i.postimg.cc/8CrrqGp8/IG.png"
                                    border="0"
                                    alt="IG"
                                />
                            </NavLink>
                        </div>
                        <div className="big-bottom">
                            <NavLink
                                to="/stephensawesomeprojects"
                                className="bottom p"
                            >
                                RESUME
                            </NavLink>
                            <NavLink
                                to="/stephensawesomeresume"
                                className="bottom r"
                            >
                                LINKEDIN
                            </NavLink>
                            <NavLink
                                to="/stephensawesomeresume"
                                className="bottom x"
                            >
                                GITHUB
                            </NavLink>
                            <NavLink
                                to="/stephensawesomeresume"
                                className="bottom y"
                            >
                                INSTAGRAM
                            </NavLink>
                        </div>
                        <div className="bottom-line-space"></div>
                        <div className="bottom-line"></div>
                    </div>
                </div>
            </div>
            <div className="power-button"></div>
        </>
    );
}

export default Dashboard;
