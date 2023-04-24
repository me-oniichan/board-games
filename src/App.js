// import { Button } from "reactstrap";
import "./App.css";
import Sudoku from "./Sudoku/Sudoku";
import Tictactoe from "./TicTacToe/TicTacToe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ display: "flex", gap: 10 }}>
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
