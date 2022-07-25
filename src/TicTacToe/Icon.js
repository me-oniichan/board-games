import {GiCrossedSwords, GiRoundShield, GiDigHole} from 'react-icons/gi'

export default function Icon({icon = ""}){
    switch (icon){
        case "cross":
            return <GiCrossedSwords size={50} color={"#e85e00"}/>;
        case "circle":
            return <GiRoundShield size={50} color={"#ab6700"} />;
        default:
            return <GiDigHole size={50} color = {"beige"}/>;
    }
}