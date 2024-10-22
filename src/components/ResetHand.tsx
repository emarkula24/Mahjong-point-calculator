import { useContext } from "react"
import { UserHandContext } from "./userHandProvider"

export default function ResetHand() {
    const {setUserHand} = useContext(UserHandContext);

    function handleReset() {
        const newHand = [];
        setUserHand(newHand) 
    }
    return (
        <>
        <button onClick={handleReset}>Reset hand</button>
        </>
    )
}