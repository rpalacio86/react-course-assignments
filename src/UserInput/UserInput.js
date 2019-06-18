import React from 'react';

import  "./UserInput.css";

const userInput = props => {

    const changeUsernameHandler = event => props.changeUsernameHandler(event.target.value);

    const style = {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box"
    }

    return <input
        className="UserInput"
        type="text"
        style={style}
        value={props.username}
        onChange={changeUsernameHandler}
    ></input>;
}

export default userInput;