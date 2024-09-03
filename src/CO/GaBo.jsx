// 3 X 3 Game Board here
// Characters to add - "👄" & "🍑"

import { useState } from "react";

// Array full of arrays which are full of nulls
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GaBo() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare() {
    setGameBoard();
  }

  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playeSymbol, colindex) => (
              <li key={colindex}>
                <button>{playeSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
