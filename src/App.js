// import { Button } from "reactstrap";
import "./App.css";
import Sudoku from "./Sudoku/Sudoku";
import Tictactoe from "./TicTacToe/TicTacToe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function spin(e) {
    let deg = 45;
    let id = setInterval(() => {
        e.target.parentNode.setAttribute("style", `background : linear-gradient(${deg}deg, #3b9de3 0%, #7157e6 25%, #b040c2 51%, #ff353c 100%);`);
        deg = (deg + 1) % 360;
    }, 5);

    return id;
}

function Home() {
    let id;
    return (
        <div className="Card">
            <div className="HeroHead">
                <div>
                    <span>G</span> <span style={{ animationDelay: "1s" }}>A</span> <span style={{ animationDelay: "2s" }}>M</span> <span style={{ animationDelay: "3s" }}>E</span>{" "}
                    <span style={{ animationDelay: "4s" }}>S</span>
                </div>
            </div>
            <Link className="front-cart-outer" to="/sudoku">
                <button
                    className="front-cart"
                    onMouseEnter={(e) => {
                        id = spin(e);
                    }}
                    onMouseLeave={(e) => clearInterval(id)}
                >
                    Sudoku
                </button>
            </Link>
            <Link className="front-cart-outer" to="/ttt">
                <button
                    className="front-cart"
                    onMouseEnter={(e) => {
                        id = spin(e);
                    }}
                    onMouseLeave={(e) => clearInterval(id)}
                >
                    Tic Tac Toe
                </button>
            </Link>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="sudoku" element={<Sudoku />} />
                    <Route path="ttt" element={<Tictactoe />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
