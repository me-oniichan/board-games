import { useState } from "react";
import Board from "./Board";
import sudokuContext from "./context/sudokuContext";
import dupContext from "./context/dupContext";
import animateContext from "./context/animateContext";
import Buttons from "./Buttons";
import "./sudoku.css"

export default function Sudoku() {
    const board = useState(
        new Array(9).fill(0).map(() =>
            new Array(9).fill(0).map(() => ({
                value: 0,
                mode: "#5b50b1",
            }))
        )
    );

    const duplicate = useState([]);

    const animate = useState(
        new Array(9).fill(0).map(() => new Array(9).fill(0).map(() => false))
    );

    return (
        <sudokuContext.Provider value={board}>
            <dupContext.Provider value={duplicate}>
                <animateContext.Provider value={animate}>
                    <div className="wrapper">
                    <div className="heading">Sudoku</div>
                        <Board></Board>
                        <Buttons></Buttons>
                    </div>
                </animateContext.Provider>
            </dupContext.Provider>
        </sudokuContext.Provider>
    );
}
