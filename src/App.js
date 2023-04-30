// import { Button } from "reactstrap";
import "./App.css";
import Sudoku from "./Sudoku/Sudoku";
import Tictactoe from "./TicTacToe/TicTacToe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Home() {
    return (
        <div className="container">
            <Link className="front-cart-outer" to="/sudoku">
                <button className="front-cart">Sudoku</button>
            </Link>
            <Link className="front-cart-outer" to="/ttt">
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
                    <span>G</span> <span style={{animationDelay : '1s'}}>A</span> <span style={{animationDelay : '2s'}}>M</span> <span style={{animationDelay : '3s'}}>E</span> <span style={{animationDelay : '4s'}}>S</span>
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