import Player from "./CO/Player";
import GaBo from "./CO/GaBo";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("👄");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) =>
      curActivePlayer === "👄" ? "🍑" : "👄"
    );
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
        <GaBo
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
