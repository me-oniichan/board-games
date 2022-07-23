import { useContext, useState } from "react";
import { Button, Tooltip } from "reactstrap";
import sudokuContext from "../context/sudokuContext";
import { solveGrid } from "../utils";
import dupContext from "../context/dupContext";


export default function Solve() {
    const [grid, setGrid] = useContext(sudokuContext);
    const duplicate = useContext(dupContext)[0];
    const [ttip, setTtip] = useState(duplicate.length ? true : false);
    return (
        <div>
            <Button
                id="solve"
                color={duplicate.length ? "danger" : "success"}
                onClick={
                    duplicate.length
                        ? () => {}
                        : () => {
                              const val = solveGrid(grid, 0, 0);
                              if (val) setGrid([...val]);
                          }
                }
            >
                Solve
            </Button>
            {duplicate.length ? (
                <Tooltip
                    flip
                    target="solve"
                    isOpen={ttip}
                    toggle={() => {
                        setTtip(!ttip);
                    }}
                    placement="top"
                >
                    Invalid Puzzle
                </Tooltip>
            ) : (
                ""
            )}
        </div>
    );
}
