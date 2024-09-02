import Player from "./CO/Player";
import GaBo from "./CO/GaBo";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initalName="PUS1" symbol="👄" />
          <Player initalName="PUS2" symbol="🍑" />
        </ol>
        <GaBo />
      </div>
      LOG
    </main>
  );
}

export default App;
