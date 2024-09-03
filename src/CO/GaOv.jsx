// gfame over screen
import upsa from "/x.webp";

export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <img src={upsa} alt="SnortHerPussyJuice" />
      <h2>FUCKED</h2>
      {winner && <p>{winner} SMELLPANTY</p>}
      {!winner && <p>😡DRAW😡</p>}
      <p>
        <button>ReFuck</button>
      </p>
    </div>
  );
}
