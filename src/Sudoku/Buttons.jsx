import Clear from "./Clear";
import Reset from "./Reset";
import Solve from "./Solve";


export default function Buttons(){
    return(
        <div className="buttons">
            <Solve/>
            <Reset/>
            <Clear/>
        </div>
    )
}