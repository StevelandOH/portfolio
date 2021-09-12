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
            <div className={messageClicked ? 'contact hidden' : 'contact '}>
                <div className="here">Contact via</div>
                <i class="fas fa-envelope"></i>
            </div>
            <input
                className={messageClicked ? 'email' : 'email hidden'}
                placeholder="EMAIL"
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                className={messageClicked ? 'message' : 'message long'}
                placeholder="message here"
                name="message"
                value={message}
                onClick={() => setMessageClicked(true)}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" value="Send" className="email-submit">
                <i class="fas fa-chevron-right"></i>
            </button>
        </form>
    );
}

export default EmailForm;
