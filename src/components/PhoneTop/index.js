import React from 'react';
import AnalogClock from 'analog-clock-react';
import me from './../../images/Me.png';
import mesh from './../../images/Mesh.png';
import clockStyle from './../../data/clockStyle';
import './PhoneTop.css';

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
                    <img
                        src={mesh}
                        className="phone-receiver"
                        alt="Receiver"
                    ></img>
                    <div className="selfie-cam"></div>
                </div>
                <div className="phone-icons">
                    <div className="icon fir">
                        <i className="fas fa-signal"></i>
                    </div>
                    <div className="icon mid">
                        <i className="fas fa-wifi"></i>
                    </div>
                    <div className="icon las">
                        <i className="fas fa-battery-three-quarters"></i>
                    </div>
                </div>
            </div>
            <div className="arrow-image-container">
                <div className="top-spacer"></div>
                <img className="my-picture" src={me} alt="MyPicture"></img>
                <div className="top-spacer"></div>
            </div>
            <div className="dash-name">Stephen Szelpal</div>
        </div>
    );
}

export default PhoneTop;
