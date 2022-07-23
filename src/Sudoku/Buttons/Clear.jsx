import { useContext } from "react";
import { Button } from "reactstrap";
import dupContext from "../context/dupContext";
import sudokuContext from "../context/sudokuContext";

export default function Clear() {
    const [grid, setGrid] = useContext(sudokuContext);
    const setDuplicate = useContext(dupContext)[1];

    const clear = () => {
        setGrid(
            grid.map((val) =>
                val.map(() => ({
                    value: 0,
                    mode: "#5b50b1",
                }))
            )
        );

        setDuplicate([])
    };

    return (
        <Button id="clear" color="info" onClick={clear}>
            Clear
        </Button>
    );
}
