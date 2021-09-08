import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Dashboard.css';
import me from './../../data/DashboardImage.png';
import mesh from './../../data/ReceiverMesh.png';
import blurry from './../../data/TopPhoneBG.png';

function Dashboard() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

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
                            <div className="phone-time">10:00</div>
                            <div className="top-bumper">
                                <img
                                    src={mesh}
                                    className="phone-receiver"
                                ></img>
                                <div className="selfie-cam"></div>
                            </div>
                            <div className="phone-icons">
                                <div className="cell-signal">|||</div>
                                <div className="wifi-signal">///</div>
                                <div className="battery-life">---</div>
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
                            <div className="inner-text right one">
                                <p>Full Stack Software Engineer</p>
                            </div>
                        </div>
                        <div className="text-box">
                            {/* row TWO of 'text'  */}
                            <div className="inner-text left two">
                                <p>
                                    JavaScript | Python | React | React-Native |
                                    CSS | HTML | AWS | Redux | Flask | Node.js |
                                    Express| GraphQL | CSS | RESTful API |
                                    Unit-Testing | End-to-end Testing
                                </p>
                            </div>
                            <div className="inner-text "></div>
                        </div>
                        <div className="text-box">
                            {/* row THREE of 'text'  */}
                            <div className="inner-text "></div>
                            <div className="inner-text right three">
                                <p>Cleveland, Ohio</p>
                            </div>
                        </div>

                        <form className="contact-box" onSubmit={sendEmail}>
                            <input
                                className="email"
                                placeholder="your email..."
                                type="email"
                                name="user_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                className="message"
                                placeholder="the message..."
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button
                                type="submit"
                                value="Send"
                                className="email-submit"
                            >
                                S
                            </button>
                        </form>
                    </div>
                    <div className="phone-bottom">
                        <div className="big-bottom">
                            <NavLink
                                className="p-button"
                                to="/stephensawesomeprojects"
                            >
                                P
                            </NavLink>
                            <NavLink
                                className="r-button"
                                to="/stephensawesomeresume"
                            >
                                R
                            </NavLink>
                            <NavLink
                                className="x-button"
                                to="/stephensawesomeresume"
                            >
                                -
                            </NavLink>
                            <NavLink
                                className="y-button"
                                to="/stephensawesomeresume"
                            >
                                -
                            </NavLink>
                        </div>
                        <div className="big-bottom">
                            <div className="bottom p">projects</div>
                            <div className="bottom r">resume</div>
                            <div className="bottom x">tbd</div>
                            <div className="bottom y">tbd</div>
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
