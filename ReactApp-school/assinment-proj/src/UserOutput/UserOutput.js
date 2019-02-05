import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>Hi, I'm {props.name}</p>
        </div>
    )
}

export default userOutput;