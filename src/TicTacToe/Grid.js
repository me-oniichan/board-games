import { useState } from "react";
import Icon from "./Icon";

const data = new Array(9).fill(" ");

const Grid = () => {
  const [turn, setTurn] = useState(Math.round(Math.random()));
  const [msg, setMsg] = useState(
    `Start Playing ${turn ? "Circle's" : "Cross'"} turn`
  );
  const [game, setGame] = useState(1);

  const playTurn = (index) => {
    if (data[index] === " " && game) {
      data[index] = turn ? "circle" : "cross";
      setMsg(`${turn ? "Cross'" : "Circle's"} turn`);
      setTurn(!turn);
    }
    checkWin();
  };

  const checkWin = () => {
    if (!game) {
      setMsg("Game already over");
    } else if (
      (data[1] === data[2] && data[2] === data[0] && data[0] !== " ") ||
      (data[5] === data[4] && data[4] === data[3] && data[3] !== " ") ||
      (data[6] === data[7] && data[7] === data[8] && data[6] !== " ") ||
      (data[0] === data[3] && data[3] === data[6] && data[6] !== " ") ||
      (data[1] === data[4] && data[4] === data[7] && data[7] !== " ") ||
      (data[2] === data[5] && data[5] === data[8] && data[8] !== " ") ||
      (data[0] === data[4] && data[4] === data[8] && data[8] !== " ") ||
      (data[2] === data[4] && data[4] === data[6] && data[2] !== " ")
    ) {
      setMsg(`${turn ? "Circle Win" : "Cross Win"}`);
      setGame(0);
    } else if (
      data[0] !== " " &&
      data[1] !== " " &&
      data[2] !== " " &&
      data[3] !== " " &&
      data[4] !== " " &&
      data[5] !== " " &&
      data[6] !== " " &&
      data[7] !== " "
    ) {
      setMsg("Game Draw");
    }
  };

  return (
    <div>
      <div className="msg" id="msg">
        {msg}
      </div>
      <div className="grid">
        {data.map((element, index) => (
          <div className="box" onClick={() => playTurn(index)}>
            <Icon icon={element} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
