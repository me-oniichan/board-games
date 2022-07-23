import { useContext } from "react";
import { Button } from "reactstrap";
import dupContext from "../context/dupContext";
import sudokuContext from "../context/sudokuContext";

export default function Animate() {
    const [grid, setGrid] = useContext(sudokuContext);
    const duplicate = useContext(dupContext)[0];

    return (
        <Button id="anime" 
        color={duplicate.length ? "danger" : "primary"}>
            Animate
        </Button>
    );
}
