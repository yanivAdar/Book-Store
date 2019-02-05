import React from 'react';
import './CharComp.css';
const charComp = (props) => {
    return (
        <div onClick={props.click} className="charComp">{props.singleChar}</div>
    );
}

export default charComp;