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
                    <span style={{ animationDelay: "4s" }}>T</span>
                    <span style={{ animationDelay: "5s" }}>A</span>
                    <span style={{ animationDelay: "6s" }}>C</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ animationDelay: "7s" }}>T</span>
                    <span style={{ animationDelay: "8s" }}>O</span>
                    <span style={{ animationDelay: "9s" }}>E</span>
                </div>
            </div>
            <Grid />
        </div>
    );
};

export default Tictactoe;
