import { useContext, useState } from "react";
import { Button, Tooltip } from "reactstrap";
import dupContext from "../context/dupContext";
import sudokuContext from "../context/sudokuContext";
import animateContext from "../context/animateContext";
import { isvalid } from "../utils";
import isanimatingContext from "../context/isanimatingContext";

export default function Animate() {
    const [grid, setGrid] = useContext(sudokuContext);
    const [animate, setAnimate] = useContext(animateContext);
    const duplicate = useContext(dupContext)[0];
    const [ttip, setTtip] = useState(duplicate.length ? true : false);
    const { isanimating, setIsanimating } = useContext(isanimatingContext);
    let v = animate;

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const toggleState = async (row, col, value) => {
        v[row][col] = true;
        setAnimate(v);

        setGrid(
            grid.map((val, ind1) =>
                val.map((val2, ind2) => {
                    return ind1 === row && ind2 === col
                        ? { ...val2, value: value }
                        : val2;
                })
            )
        );

        await sleep(100);
    };

    const toggleNormal = (row, col) => {
        v[row][col] = false;
        setAnimate(v);
    };

    const animation = async () => {
        setIsanimating(true);
        const solve = async (grid, row, col) => {
            if (col > 8 && row >= 8) return grid;
            else if (col > 8) {
                col = 0;
                row++;
            }
            if (grid[row][col].value !== 0) {
                return solve(grid, row, col + 1);
            }

            for (let i = 1; i <= 9; i++) {
                if (isvalid(grid, row, col, i)) {
                    grid[row][col].value = i;
                    await toggleState(row, col, i);
                    if (await solve(grid, row, col+1)) {
                        return grid;
                    } else grid[row][col].value = 0;
                }
            }
            toggleNormal(row, col);
            return false;
        };
        await solve(grid, 0, 0);
        setAnimate(animate.map((v) => v.map(() => false)));
        setIsanimating(false);
    };

    return (
        <div>
            <Button
                id="animate"
                color={duplicate.length ? "danger" : "primary"}
                onClick={
                    duplicate.length || isanimating
                        ? () => {}
                        : () => {
                              animation();
                          }
                }
            >
                Animate
            </Button>
            {duplicate.length ? (
                <Tooltip
                    flip
                    target="animate"
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
