import React from 'react';
import './FakeNav.css';

function FakeNav() {
    return (
        <div className="fake-nav-box">
            <div className="r-icon-container">
                <a href="https://www.reddit.com/" target="_blank">
                    <img
                        src="https://i.postimg.cc/vBjz8FZd/rIcon.png"
                        border="0"
                        alt="rIcon"
                    />
                </a>
            </div>
            <div className="nav-search">
                <i class="fas fa-search"></i>
            </div>
            <div className="nav login">Design:</div>
            <div className="nav signup">Reddit</div>
            <div style={{ marginLeft: '-20px' }}>
                <i style={{ fontSize: '14pt' }} class="far fa-user"></i>
                <i style={{ fontSize: '10pt' }} class="fas fa-chevron-down"></i>
            </div>
        </div>
    );
}

export default FakeNav;
