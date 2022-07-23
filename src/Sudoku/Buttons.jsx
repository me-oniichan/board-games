import Clear from "./Buttons/Clear";
import Reset from "./Buttons/Reset";
import Solve from "./Buttons/Solve";


export default function Buttons(){
    return(
        <div className="buttons">
            <Solve/>
            <Reset/>
            <Clear/>
        </div>
    )
}