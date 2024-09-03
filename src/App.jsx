import Player from "./CO/Player";
import GaBo from "./CO/GaBo";
import { useState } from "react";
import GaLog from "./CO/GaLog";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "👄";

  if (gameTurns.length > 0 && gameTurns[0].player === "👄") {
    currentPlayer = "🍑";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("👄");

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) =>
    //   curActivePlayer === "👄" ? "🍑" : "👄"
    // );
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initalName="PUS1"
            symbol="👄"
            isActive={activePlayer === "👄"}
          />
          <Player
            initalName="PUS2"
            symbol="🍑"
            isActive={activePlayer === "🍑"}
          />
        </ol>
        <GaBo onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <GaLog turns={gameTurns} />
    </main>
  );
}

export default App;
