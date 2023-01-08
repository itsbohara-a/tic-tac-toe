import React, { useEffect } from "react";
import "./game.css";
import { useState } from "react";

function TicTacToeGame() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turnX, setIsTurnX] = useState<boolean>(true);
  function handleBoxClick(i) {
    if (winner) return;
    setIsTurnX(!turnX);
    squares[i] = turnX ? "X" : "O";
    setSquares(squares);
  }

  const winner = calculateWinner(squares);

  const finished = () => squares.filter((value) => value != null).length === 9;

  function handleGameRestart() {
    setIsTurnX(true);
    setSquares(Array(9).fill(null));
  }

  return (
    <>
      <div className="game">
        <div className="board">
          {squares.map((value, index) => (
            <Box
              key={index}
              index={index}
              value={value}
              onBoxClick={handleBoxClick}
            />
          ))}
        </div>
      </div>
      {!winner && <h2>Turn : {turnX ? "X" : "0"}</h2>}
      {winner && <h3>Winner : {winner}</h3>}
      {!winner && finished() && <h3>Game Draw</h3>}

      <button onClick={handleGameRestart}>Restart</button>
    </>
  );
}

function Box({ index, value, onBoxClick }: any) {
  return (
    <div
      className="box"
      onClick={() => {
        if (value) return;
        onBoxClick(index);
      }}
    >
      <h3>{value}</h3>
    </div>
  );
}

export default TicTacToeGame;

function calculateWinner(squares) {
  const winPatterns = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (var [a, b, c] of winPatterns) {
    a = a - 1;
    b = b - 1;
    c = c - 1;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
