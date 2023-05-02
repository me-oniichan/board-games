import { useState } from "react";
import Board from "./Board";
import sudokuContext from "./context/sudokuContext";
import dupContext from "./context/dupContext";
import animateContext from "./context/animateContext";
import Buttons from "./Buttons";
import "./sudoku.css";

export default function Sudoku() {
    const board = useState(
        new Array(9).fill(0).map(() =>
            new Array(9).fill(0).map(() => ({
                value: 0,
                mode: "#6616fb",
            }))
        )
    );

    const duplicate = useState([]);

    const animate = useState(new Array(9).fill(0).map(() => new Array(9).fill(0).map(() => false)));

    return (
        <sudokuContext.Provider value={board}>
            <dupContext.Provider value={duplicate}>
                <animateContext.Provider value={animate}>
                    <div className="wrapper">
                        <div className="HeroInsider HeroHead">
                            <div>
                                <span>S</span>
                                <span style={{ animationDelay: "1s" }}>U</span>
                                <span style={{ animationDelay: "2s" }}>D</span>
                                <span style={{ animationDelay: "3s" }}>O</span>
                                <span style={{ animationDelay: "4s" }}>K</span>
                                <span style={{ animationDelay: "5s" }}>U</span>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                            <Board></Board>
                            <Buttons></Buttons>
                        </div>
                    </div>
                </animateContext.Provider>
            </dupContext.Provider>
        </sudokuContext.Provider>
    );
}
