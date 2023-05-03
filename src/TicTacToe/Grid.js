import { useState } from "react";
import { Button } from "reactstrap";
import Icon from "./Icon";

const Grid = () => {
  const [data, setData] = useState(new Array(9).fill(" "));
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
      <div className="bg-card grid">
        {data.map((element, index) => (
          <div className="box" key={index} onClick={() => playTurn(index)}>
            <Icon icon={element} />
          </div>
        ))}
      </div>
      <Button className="mt-3" color="info" onClick={()=>{
          setData(new Array(9).fill(" "));
          setMsg(`Start Playing ${turn ? "Circle's" : "Cross'"} turn`);
          setGame(1);
      }} style={{width: "100px"}}>Reset</Button>
    </div>
  );
};

export default Grid;
