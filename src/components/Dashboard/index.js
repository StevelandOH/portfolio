import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Dashboard.css';
import me from './../../data/DashboardImage.png';
import mesh from './../../data/ReceiverMesh.png';

function Dashboard() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();
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
    }

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
                            <div className="inner-text right">
                                <li>Full Stack Software Engineer</li>
                                <li>Full Stack Software Engineer</li>
                            </div>
                        </div>
                        <div className="text-box">
                            {/* row TWO of 'text'  */}
                            <div className="inner-text left">
                                <li>Full Stack Software Engineer</li>
                                <li>Full Stack Software Engineer</li>
                                <li>Full Stack Software Engineer</li>
                            </div>
                            <div className="inner-text "></div>
                        </div>
                        <div className="text-box">
                            {/* row THREE of 'text'  */}
                            <div className="inner-text "></div>
                            <div className="inner-text right">
                                <li>Full Stack Software Engineer</li>
                            </div>
                        </div>
                        <div className="text-box">
                            {/* row FOUR of 'text'  */}
                            <div className="inner-text left">
                                <li>Full Stack Software Engineer</li>
                            </div>
                            <div className="inner-text "></div>
                        </div>
                        <div className="text-box">
                            {/* row FOUR of 'text'  */}
                            <div className="inner-text "></div>
                            <div className="inner-text right">
                                <li>Full Stack Software Engineer</li>
                            </div>
                        </div>
                        <form className="contact-box" onSubmit={sendEmail}>
                            <input
                                className="email"
                                placeholder="Email Address"
                                type="email"
                                name="user_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                className="message"
                                placeholder="Message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button
                                type="submit"
                                value="Send"
                                className="email-submit"
                            >
                                ⬆
                            </button>
                        </form>
                    </div>
                    <div className="phone-bottom">
                        <NavLink
                            className="p-button"
                            to="/stephensawesomeprojects"
                        >
                            MyWork
                        </NavLink>
                        <NavLink
                            className="r-button"
                            to="/stephensawesomeresume"
                        >
                            Resume
                        </NavLink>
                        <NavLink
                            className="x-button"
                            to="/stephensawesomeresume"
                        >
                            ...
                        </NavLink>
                        <NavLink
                            className="y-button"
                            to="/stephensawesomeresume"
                        >
                            ...
                        </NavLink>
                    </div>
                    <div className="bottom-line"></div>
                </div>
            </div>
            <div className="power-button"></div>
        </>
    );
}

export default Dashboard;
