import Player from "./CO/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initalName="PUS1" symbol="👄" />
          <Player initalName="PUS2" symbol="🍑" />
        </ol>
        GAMEBOARD
      </div>
      LOG
    </main>
  );
}

export default App;
