import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

function App() {
  const [text, setText] = useState("Hola");

  const updateText = ev => setText(ev.target.value);
  
  const deleteLetter = ix => {
    const textChars = text.split('');
    textChars.splice(ix, 1);
    setText(textChars.join(''));
  }

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={updateText} value={text}></input>
        <p>The word is {text}!</p>
        <ValidationComponent length={text.length}></ValidationComponent>
        {text.split('').map((c, ix) => (
          <CharComponent 
            key={ix} 
            letter={c} 
            click={() => deleteLetter(ix)}>
            </CharComponent>)
          )
        }
        {/* <UserInput  username={username} changeUsernameHandler={setUsername}></UserInput>
        <UserOutput username={username}></UserOutput>
        <UserOutput></UserOutput>
        <UserOutput></UserOutput> */}
      </header>
    </div>
  );
}

export default App;
