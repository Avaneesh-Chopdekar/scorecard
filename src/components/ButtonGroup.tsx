export default function ButtonGroup({
  handleRounds,
  handleResetScore,
  handleResetRounds,
}: {
  handleRounds: () => void;
  handleResetScore: () => void;
  handleResetRounds: () => void;
}) {
  return (
    <div className="btns">
      <button onClick={handleRounds}>Add Round</button>
      <button onClick={handleResetScore}>Reset Score</button>
      <button onClick={handleResetRounds}>Reset Rounds</button>
    </div>
  );
}
