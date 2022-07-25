import { Button } from "reactstrap";
import "./App.css";
import Sudoku from "./Sudoku/Sudoku";
import Tictactoe from "./TicTacToe/TicTacToe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ display: "flex", gap: 10 }}>
            <Link to="/sudoku">
                <Button color="info">Sudoku</Button>
            </Link>
            <Link to="/ttt">
                <Button color="info">Tic Tac Toe</Button>
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
