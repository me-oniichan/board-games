import { useContext } from "react";
import { Button } from "reactstrap";
import sudokuContext from "../context/sudokuContext";

export default function Reset(){
    const [grid, setGrid] = useContext(sudokuContext)

    const reset = ()=>{
        setGrid(grid.map((val1)=>(
            val1.map((val2)=>{
                return val2.mode === "#5b50b1"? {...val2, value: 0} : val2;
            })
        )))
    }

    return(
        <Button id="reset" color="warning" onClick={reset}>Reset</Button>
    )
}