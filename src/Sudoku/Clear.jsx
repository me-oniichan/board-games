import { useContext } from "react";
import { Button } from "reactstrap";
import sudokuContext from "./sudokuContext";

export default function Clear() {
    const [grid, setGrid] = useContext(sudokuContext);

    const clear = () => {
        setGrid(
            grid.map((val) =>
                val.map(() => ({
                    value: 0,
                    mode: "#5b50b1",
                }))
            )
        );
    };

    return (
        <Button id="clear" color="info" onClick={clear}>
            Clear
        </Button>
    );
}
