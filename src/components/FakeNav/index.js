import React from 'react';
import './FakeNav.css';

function FakeNav() {
    return (
        <div className="fake-nav-box">
            <div className="nav i">
                <a href="https://postimages.org/" target="_blank">
                    <img
                        src="https://i.postimg.cc/vBjz8FZd/rIcon.png"
                        border="0"
                        alt="rIcon"
                    />
                </a>
            </div>
            <div className="nav search">modeled...</div>
            <div className="nav login">after</div>
            <div className="nav signup">Reddit</div>
            <div className="nav i">
                <i class="far fa-user"></i>
            </div>
        </div>
    );
}

export default FakeNav;
