import React from 'react';
import textData from '../../data/textData';
import './PhoneScreen.css';

function PhoneScreen() {
    return (
        <div className="phone-screen">
            {textData.map((text, i) => (
                <div key={i} className="text-box">
                    <div className={text.classOne}>
                        {text.position === 'left' ? text.textOne : null}
                        {text.position === 'left' && text.textTwo
                            ? text.textTwo
                            : null}
                    </div>
                    <div className={text.classTwo}>
                        {text.position === 'right' ? text.textOne : null}
                        {text.position === 'right' && text.textTwo
                            ? text.textTwo
                            : null}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PhoneScreen;
