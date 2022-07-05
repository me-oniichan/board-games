import { useState } from "react";
import Board from "./Board";
import sudokuContext from "./sudokuContext";
import Buttons from "./Buttons";

export default function Sudoku() {
    const board = useState(new Array(9).fill(0).map(() => new Array(9).fill(0).map(()=>({
        value: 0,
        class: "valid",
        mode: "#5b50b1"
    }))));

    return (
        <sudokuContext.Provider value={board}>
            <div className="wrapper" >
                <Board></Board>
                <Buttons></Buttons>
            </div>
        </sudokuContext.Provider>
    );
}
