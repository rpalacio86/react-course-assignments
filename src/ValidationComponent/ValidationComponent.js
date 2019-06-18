import React from 'react';

const validationComponent = props => {
    let advice = props.length < 5? "Text too short" : "Text long enough";
    return <p>{advice}</p>;
}

export default validationComponent;