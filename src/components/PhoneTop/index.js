import React, { useState } from 'react';
import AnalogClock from 'analog-clock-react';
import me from './../../images/Me.png';
import mesh from './../../images/Mesh.png';
import './PhoneTop.css';

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

function PhoneTop() {
    return (
        <div className="top-sect-container">
            <div className="top-banner">
                <div
                    style={{
                        padding: '5px 30px 5px 5px',
                    }}
                >
                    <AnalogClock {...clockStyle} />
                </div>
                <div className="top-bumper">
                    <img src={mesh} className="phone-receiver"></img>
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
                <div className="text-back-arrow">
                    <i class="fas fa-comments"></i>
                    <p>design | iMessage</p>
                </div>
                <img className="my-picture" src={me}></img>
                <div className="top-spacer"></div>
            </div>
            <div className="dash-name">Stephen Szelpal</div>
        </div>
    );
}

export default PhoneTop;
