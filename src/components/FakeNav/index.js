import React from 'react';
import './FakeNav.css';

function FakeNav() {
    return (
        <div className="fake-nav-box">
            <div className="r-icon-container">
                <button
                    style={{ background: 'rgba(0, 0, 0, 0)', border: 'none' }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('https://www.reddit.com/');
                    }}
                >
                    <img
                        src="https://i.postimg.cc/vBjz8FZd/rIcon.png"
                        border="0"
                        alt="RedditIcon"
                    />
                </button>
            </div>
            <div className="nav-search">
                <i className="fas fa-search"></i>
            </div>
            <div className="nav login">Design:</div>
            <div className="nav signup">Reddit</div>
            <div style={{ marginLeft: '-20px' }}>
                <i style={{ fontSize: '14pt' }} className="far fa-user"></i>
                <i
                    style={{ fontSize: '10pt', marginLeft: '5px' }}
                    className="fas fa-chevron-down"
                ></i>
            </div>
        </div>
    );
}

export default FakeNav;
