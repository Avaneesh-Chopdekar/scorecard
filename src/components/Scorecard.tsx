import Add from "../assets/add.svg";
import Sub from "../assets/sub.svg";
import Constants from "../utils/constants";

export default function Scorecard({
  p1Score,
  setP1Score,
  p2Score,
  setP2Score,
}: {
  p1Score: number;
  setP1Score: (value: number) => void;
  p2Score: number;
  setP2Score: (value: number) => void;
}) {
  const { localStorageP1, localStorageP2 } = Constants;
  const iconWidth = 36;
  const iconHeight = 36;
  return (
    <>
      <div className="p-div">
        <p className="p" id="p1">
          Player 1
        </p>
        <b>{p1Score}</b>
        <div className="controls">
          <img
            className="icon"
            onClick={() => {
              setP1Score(p1Score + 1);
              localStorage.setItem(localStorageP1, (p1Score + 1).toString());
            }}
            id="add"
            src={Add}
            alt="add"
            width={iconWidth}
            height={iconHeight}
          />
          <img
            className="icon"
            onClick={() => {
              setP1Score(p1Score - 1);
              localStorage.setItem(localStorageP1, (p1Score - 1).toString());
            }}
            id="sub"
            src={Sub}
            alt="sub"
            width={iconWidth}
            height={iconHeight}
          />
        </div>
      </div>
      <hr className="vertical-line" />
      <div className="p-div">
        <p className="p" id="p2">
          Player 2
        </p>
        <b>{p2Score}</b>
        <div className="controls">
          <img
            className="icon"
            onClick={() => {
              setP2Score(p2Score + 1);
              localStorage.setItem(localStorageP2, (p2Score + 1).toString());
            }}
            id="add"
            src={Add}
            alt="add"
            width={iconWidth}
            height={iconHeight}
          />
          <img
            className="icon"
            onClick={() => {
              setP2Score(p2Score - 1);
              localStorage.setItem(localStorageP2, (p2Score - 1).toString());
            }}
            id="sub"
            src={Sub}
            alt="sub"
            width={iconWidth}
            height={iconHeight}
          />
        </div>
      </div>
    </>
  );
}
