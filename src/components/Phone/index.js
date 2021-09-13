import React, { useState } from 'react';
import PhoneTop from '../PhoneTop';
import PhoneScreen from '../PhoneScreen';
import PhoneBottom from '../PhoneBottom';
import emailjs from 'emailjs-com';
import EmailForm from '../EmailForm';
import './Phone.css';

function Phone() {
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
        <div
            style={{
                height: '1680px',
                width: '950px',
                borderRadius: '5em',
                boxShadow: '20px 20px 20px #1b1b1b',
            }}
        >
            <div className="phone">
                {' '}
                <PhoneTop />
                <PhoneScreen />
                <EmailForm
                    sendEmail={sendEmail}
                    messageClicked={messageClicked}
                    email={email}
                    message={message}
                    setEmail={setEmail}
                    setMessageClicked={setMessageClicked}
                    setMessage={setMessage}
                />
                <PhoneBottom />
            </div>
            <div className="power-button"></div>
        </div>
    );
}

export default Phone;
