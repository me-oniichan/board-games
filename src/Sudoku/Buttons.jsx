import Reset from "./Reset";
import Solve from "./Solve";


export default function Buttons(){
    return(
        <div style={{margin: "5px", fontSize:"1rem"}}>
            <Solve/>
            <Reset/>
        </div>
    )
}