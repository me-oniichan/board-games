import { useState } from "react";
import Board from "./Board";
import sudokuContext from "./sudokuContext";
import Buttons from "./Buttons";

export default function Sudoku() {
    const board = useState(new Array(9).fill(0).map(() => new Array(9).fill(0).map(()=>({
        value: 0,
        class: "col",
        mode: "#3838f9ed"
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
