// gfame over screen
import upsa from "/x.webp";

export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <img src={upsa} alt="SnortHerPussyJuice" />
      <h2>FUCKED</h2>
      {winner && <p>{winner} SMELLPANTY</p>}
      {!winner && <p>😡DRAW😡</p>}
      <p>
        <button onClick={onRestart}>ReFuck</button>
      </p>
    </div>
  );
}
