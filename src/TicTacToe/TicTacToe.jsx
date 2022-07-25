import React from "react";
import Grid from "./Grid";
import "./tictactoe.css";

const Tictactoe = () => {
  return (
    <div className="backgrd">
      <div className="heading">Tic Tac Toe</div>
      <Grid />
    </div>
  );
};

export default Tictactoe;