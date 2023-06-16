export default function ListItem({ i, round }: { i: number; round: Round }) {
  return (
    <li className="list-item">
      <span>Round {i + 1}</span>
      <span>
        {round.p1} | {round.p2}
      </span>
    </li>
  );
}
