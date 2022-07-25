import {GiCrossedSwords, GiRoundShield, GiDigHole} from 'react-icons/gi'

export default function Icon({icon = ""}){
    switch (icon){
        case "cross":
            return <GiCrossedSwords size={50} color={"#fcd49f"}/>;
        case "circle":
            return <GiRoundShield size={50} color={"#ab6700"} />;
        default:
            return <GiDigHole size={50} color = {"beige"}/>;
    }
}