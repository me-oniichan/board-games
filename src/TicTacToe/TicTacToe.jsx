import React from "react";
import Grid from "./Grid";
import "./tictactoe.css";

const Tictactoe = () => {
    return (
        <div className="backgrd">
            <div className="HeroInsider HeroHead">
                <div>
                    <span>T</span>
                    <span style={{ animationDelay: "1s" }}>I</span>
                    <span style={{ animationDelay: "2s" }}>C</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ animationDelay: "3s" }}>T</span>
                    <span style={{ animationDelay: "4s" }}>A</span>
                    <span style={{ animationDelay: "5s" }}>C</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ animationDelay: "3s" }}>T</span>
                    <span style={{ animationDelay: "4s" }}>O</span>
                    <span style={{ animationDelay: "5s" }}>E</span>
                </div>
            </div>
            <Grid />
        </div>
    );
};

export default Tictactoe;
