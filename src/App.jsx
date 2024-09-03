import Player from "./CO/Player";
import GaBo from "./CO/GaBo";
import { useState } from "react";
import GaLog from "./CO/GaLog";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("👄");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) =>
      curActivePlayer === "👄" ? "🍑" : "👄"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "👄";

      if (prevTurns.length > 0 && prevTurns[0].player === "👄") {
        currentPlayer = "🍑";
      }

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
