import React, { useContext, useState } from 'react';
import { UserHandContext } from './userHandProvider.tsx';
import { CountHan } from './CountHan.js'; // Importing CountYakus function

export default function CalculateButton() {
    const { userHand } = useContext(UserHandContext);
    const [points, setPoints] = useState(0); // State to store calculated points

    function handleCalculate() {
        // Call the CountYakus function with userHand
        const calculatedPoints = CountHan(userHand);
        setPoints(calculatedPoints); // Update the state with calculated points
    }

    return (
        <>
            <button onClick={handleCalculate}>Calculate points</button>
            <p>Total Points: {points}</p> {/* Display calculated points */}
        </>
    );
}
