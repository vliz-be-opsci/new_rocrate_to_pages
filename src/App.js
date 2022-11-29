import logo from './logo.svg';
import './App.css';
//import react scripts
import React from 'react';

//import REACT_INPUT_CRATE_PATH from .env
const path_url = process.env.REACT_APP_CRATE;
console.log(path_url);
console.log(process.env);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {path_url}
        </a>
      </header>
    </div>
  );
}

export default App;
