import '../App.css';
import RenderHandSelection from ".//RenderHandSelection.tsx"; 
import DeleteSelectionButton from './/DeleteSelectionButton.tsx';
import { UserHandContext } from './userHandProvider.tsx';
import { useContext } from 'react';
import ResetHand from './ResetHand.tsx';
import CalculateButton from './CalculateButton.tsx';

export default function AppContent() {

    const { userHand, setUserHand } = useContext(UserHandContext);
    
    return (
    <>
        <RenderHandSelection userHand={userHand} setUserHand={setUserHand} />
        <p>Your Hand: {userHand.map(tile => tile.value).join(', ')}</p> {/* Display selected tile values */ }
        <ResetHand />
        <DeleteSelectionButton userHand={userHand} setUserHand={setUserHand} />
        <CalculateButton />
        
    </>
    );
}
