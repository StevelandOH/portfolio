import React, { useState } from 'react';
import AnalogClock from 'analog-clock-react';
import me from './../../images/Me.png';
import mesh from './../../images/Mesh.png';
import background from './../../images/Barrio.png';
import './PhoneTop.css';

const clockStyle = {
    width: '45px',
    border: true,
    marginTop: '25px',
    borderColor: '#000000',
    baseColor: '#dddddd',
    centerColor: 'none',
    centerBorderColor: 'none',
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
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '5px 30px 5px 5px',
                        width: '150px',
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
                <div className="top-spacer"></div>
                <img className="my-picture" src={me}></img>
                <div className="top-spacer"></div>
            </div>
            <div className="dash-name">Stephen Szelpal</div>
        </div>
    );
}

export default PhoneTop;
