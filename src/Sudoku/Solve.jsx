import { useContext } from "react";
import { Button } from "reactstrap";
import sudokuContext from "./sudokuContext";
import { solveGrid } from "./utils";

export default function Solve() {
    const [grid, setGrid] = useContext(sudokuContext);
    return (
        <Button
            color="success"
            onClick={() => {
                const val = solveGrid(grid, 0, 0);
                if (val)
                    setGrid([...val]);
            }}
        >
            Solve
        </Button>
    );
}
