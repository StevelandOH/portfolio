import React from 'react';
import './PhoneScreen.css';

function PhoneScreen() {
    return (
        <div className="phone-screen">
            <div className="text-box">
                {/* row ONE of 'text' */}
                <div className="inner-text "></div>
                <div className="inner-text right t1">
                    <p style={{ fontWeight: 'bolder' }}>
                        I'm a Full Stack Software Engineer...
                    </p>
                </div>
            </div>
            <div className="text-box">
                {/* row TWO of 'text'  */}
                <div className="inner-text left t2">
                    <p>
                        ...who's a problem solver, I believe in empathy first,
                        I’m a strong communicator, a self-starter, an insatiable
                        questioner and I absolutely love to build stuff!
                    </p>
                    <br />

                    <p>
                        Since I started to code in March of 2020, everyday has
                        been both humbling, and immensely fulfilling. I never in
                        my life thought I would get so much joy out of playing
                        with a Python or React Library as well as the excitement
                        I get from reading about additions into JavaScript's
                        es6...
                    </p>
                </div>
                <div className="inner-text "></div>
            </div>
            <div className="text-box">
                {/* row THREE of 'text'  */}
                <div className="inner-text "></div>
                <div className="inner-text right t3">
                    <p>TECHNOLOGIES 😎</p>
                </div>
            </div>
            <div className="text-box">
                {/* row FOUR of 'text'  */}
                <div className="inner-text left t4">
                    <p>
                        Python - JavaScript - React - React-Native - SQL -
                        RESTful API - Redux - Flask - Node.js - CSS - Express -
                        GraphQL - AWS - HTML{' '}
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
    );
}

export default PhoneScreen;
