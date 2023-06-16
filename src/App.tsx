import { useState } from "react";
import "./App.css";
import Scorecard from "./components/Scorecard";
import ListItem from "./components/ListItem";
import ButtonGroup from "./components/ButtonGroup";
import Constants from "./utils/constants";

function App() {
  const { localStorageP1, localStorageP2, localStorageRounds } = Constants;
  let newObj: Round;
  const getLocalStorageP1 = localStorage.getItem(localStorageP1);
  const getLocalStorageP2 = localStorage.getItem(localStorageP2);
  const getLocalStorageRounds = localStorage.getItem(localStorageRounds);

  const [p1Score, setP1Score] = useState(
    getLocalStorageP1 ? Number.parseInt(getLocalStorageP1) : 0
  );
  const [p2Score, setP2Score] = useState(
    getLocalStorageP2 ? Number.parseInt(getLocalStorageP2) : 0
  );
  const [rounds, setRounds] = useState<Round[]>(
    getLocalStorageRounds ? JSON.parse(getLocalStorageRounds) : []
  );

  const handleRounds = () => {
    newObj = { p1: p1Score, p2: p2Score };
    setRounds([...rounds, newObj]);
    localStorage.setItem(
      localStorageRounds,
      JSON.stringify([...rounds, newObj])
    );
  };

  const handleResetScore = () => {
    alert("Score Reset");
    setP1Score(0);
    setP2Score(0);
    localStorage.setItem(localStorageP1, "0");
    localStorage.setItem(localStorageP2, "0");
  };

  const handleResetRounds = () => {
    alert("Full Reset");
    setP1Score(0);
    setP2Score(0);
    setRounds([]);
    localStorage.clear();
  };

  return (
    <>
      <div className="container">
        <Scorecard
          p1Score={p1Score}
          setP1Score={setP1Score}
          p2Score={p2Score}
          setP2Score={setP2Score}
        />
      </div>
      <ButtonGroup
        handleRounds={handleRounds}
        handleResetScore={handleResetScore}
        handleResetRounds={handleResetRounds}
      />
      <ul>
        {rounds.length === 0 ||
          rounds.map((round: Round, i: number) => (
            <ListItem round={round} i={i} key={i} />
          ))}
      </ul>
    </>
  );
}

export default App;
