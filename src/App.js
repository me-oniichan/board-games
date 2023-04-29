// import { Button } from "reactstrap";
import "./App.css";
import Sudoku from "./Sudoku/Sudoku";
import Tictactoe from "./TicTacToe/TicTacToe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <Link to="/sudoku">
                <button className="front-cart">Sudoku</button>
            </Link>
            <Link to="/ttt">
                <button className="front-cart">Tic Tac Toe</button>
            </Link>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <div className="HeroHead">
                <div>
                    <span>G</span> <span>A</span> <span>M</span> <span>E</span> <span>S</span>
                </div>
            </div>
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
