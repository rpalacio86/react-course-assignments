import React from 'react';

import './UserOutput.css';

const userOutput = props => {
    return (
        <div className="UserOutput">
            <p>My first paragraph {props.username}!</p>
            <p>My second paragrap</p>
        </div>
    );
}

export default userOutput;