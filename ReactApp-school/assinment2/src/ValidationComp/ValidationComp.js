import React from 'react';

const validationComp = (props) => {
    return (
        <p>{props.textLength > 5 ? "Text long enough" : "Text too short"}</p>
    );
}

export default validationComp;