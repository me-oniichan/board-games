import { useContext, useState } from "react";
import { Button, Tooltip } from "reactstrap";
import dupContext from "../context/dupContext";
import sudokuContext from "../context/sudokuContext";
import animateContext from "../context/animateContext";
import { isvalid } from "../utils";

export default function Animate() {
    const [grid, setGrid] = useContext(sudokuContext);
    const [animate, setAnimate] = useContext(animateContext);
    const duplicate = useContext(dupContext)[0];
    const [ttip, setTtip] = useState(duplicate.length ? true : false);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const toogleState = async (row, col, value) => {
        setAnimate(
            animate.map((val, ind1) =>
                val.map((val2, ind2) => {
                    return (ind1 === row && ind2 === col)? true : val2;
                })
            )
        );

        setGrid(grid.map((val, ind1)=>(
            val.map((val2, ind2)=>{
                return (ind1 === row && ind2 === col)? {...val2, value : value} : val2;
            })
        )))

        await sleep(100)
    };

    const togleNormal = (row, col)=>{
        setAnimate(
            animate.map((val, ind1) =>
                val.map((val2, ind2) => {
                    return (ind1 === row && ind2 === col)? false : val2;
                })
            )
        );
    }


    const animation = () => {
        const solve = async (grid, row, col) => {
            if (row > 8 && col >= 8) return grid;
            else if (row > 8) {
                row = 0;
                col++;
            }
            if (grid[row][col].value !== 0) {
                return solve(grid, row + 1, col);
            }

            for (let i = 1; i <= 9; i++) {
                if (isvalid(grid, row, col, i)) {
                    grid[row][col].value = i;
                    await toogleState(row, col, i)
                    if (await solve(grid, row + 1, col)){
                        return grid;
                    }
                    else grid[row][col].value = 0;
                }
            }
            togleNormal(row, col);
            return false;
        };
        solve(grid, 0, 0);
    };

    return (
        <div>
            <Button
                id="animate"
                color={duplicate.length ? "danger" : "primary"}
                onClick = {animation}
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
