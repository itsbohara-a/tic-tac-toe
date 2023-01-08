import { useState } from "react";
import "./App.css";
import TicTacToeGame from "./game/index";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h2>Tic Tac Toe</h2>
      <p>Simple Tic Tac Toe game in React</p>
      <TicTacToeGame />
      <div className="card"></div>
      <p className="read-the-docs">
        @itsbohara
      </p>
    </div>
  );
}

export default App;
