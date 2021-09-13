import React from 'react';
import './EmailForm.css';

function EmailForm({
    sendEmail,
    messageClicked,
    email,
    message,
    setEmail,
    setMessageClicked,
    setMessage,
}) {
    return (
        <form className="contact-box" onSubmit={sendEmail}>
            <div className="contact">
                <i class="fas fa-envelope"></i>
                <div>CONTACT</div>
            </div>
            <input
                className="email"
                placeholder="EMAIL"
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                className="message"
                placeholder="MESSAGE"
                name="message"
                value={message}
                onClick={() => setMessageClicked(true)}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" value="Send" className="email-submit">
                <i class="fas fa-arrow-up"></i>
            </button>
        </form>
    );
}

export default EmailForm;
