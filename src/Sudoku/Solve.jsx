import { useContext } from "react";
import { Button } from "reactstrap";
import sudokuContext from "./sudokuContext";

export default function Solve(){
    const [grid, setGrid] = useContext(sudokuContext);
    return(
        <Button color="success">Solve</Button>
    )
}