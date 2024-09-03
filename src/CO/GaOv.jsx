// gfame over screen

export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>FUCKED</h2>
      {winner && <p>{winner} SMELLPANTY</p>}
      {!winner && <p>😡DRAW😡</p>}
      <p>
        <button>ReFuck</button>
      </p>
    </div>
  );
}
