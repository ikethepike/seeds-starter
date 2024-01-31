import React from "react";
import "./App.css";

function App() {
  const name = "Harold";

  return (
    <div className="App">
      <header className="App-header">
        <h1>🌱</h1>
        <p>Welcome {name}!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
