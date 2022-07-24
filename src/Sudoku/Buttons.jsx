import { useState } from "react";
import Animate from "./Buttons/Animate";
import Clear from "./Buttons/Clear";
import Reset from "./Buttons/Reset";
import Solve from "./Buttons/Solve";
import isanimatingContext from "./context/isanimatingContext"

export default function Buttons() {
    const [isanimating, setIsanimating] = useState(false);
    return (
        <div className="buttons">
            <isanimatingContext.Provider value={{isanimating, setIsanimating}}>
                <Solve />
                <Reset />
                <Clear />
                <Animate />
            </isanimatingContext.Provider>
        </div>
    )
}