import React from 'react';
import './Loader.css';

function Loader() {
    return (
        <div className="loader">
            <div className="half-loader">
                <i
                    style={{ fontSize: '50pt' }}
                    className="far fa-snowflake"
                ></i>
            </div>
        </div>
    );
}

export default Loader;
