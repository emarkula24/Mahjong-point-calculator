import '../App.css';
import RenderHandSelection from ".//RenderHandSelection.tsx"; 
import DeleteSelectionButton from './/DeleteSelectionButton.tsx';
import { UserHandContext } from './userHandProvider.tsx';
import { useContext, useState } from 'react';
import ResetHand from './ResetHand.tsx';
import CalculateButton from './CalculateButton.tsx';
import Checkbox from './Checkbox.tsx';

export default function AppContent() {

    const { userHand, setUserHand } = useContext(UserHandContext);

    const [checkboxes, setCheckBoxes] = useState({
        handstatus: false,
        riichi: false,
        doubleRiichi: false,
        tsumo: false,
        ippatsu: false,
        haiteiRaoyue: false,
        houteiRaoyui: false,
        rinshanKaihou: false,
        chankan: false,
        
    })
    
    return (
    <>
        <RenderHandSelection  />
        <p>Your Hand: {userHand.map(tile => tile.value).join(', ')}</p> {/* Display selected tile values */ }
        <ResetHand />
        <DeleteSelectionButton userHand={userHand} setUserHand={setUserHand} />
        <CalculateButton />
        <Checkbox name="handstatus" />
    </>
    );
}
