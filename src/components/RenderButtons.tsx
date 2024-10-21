import { useState } from "react";
import Checkbox from "./Checkbox";
import NumberButton from "./NumberButton";
import SuitButton from "./SuitButton";
export default function RenderButtons() {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [checkboxes, setCheckBoxes] = useState({
        meld: false,
        triple: false,
        pair: false
    });

    // Unified event handler for both checkboxes
    function handleBoxChangeEvent(event) {
        const { name, checked } = event.target;

        // If the checkbox is checked, set the others to false
        setCheckBoxes(() => ({
            meld: name === 'meld' ? checked : false,
            triple: name === 'triple' ? checked : false,
            pair: name === 'pair' ? checked : false
        }));
    }
    
    const [NumberSelectionData, setNumberSelectionData] = useState(0);
    const [SuitSelectionData, setSuitSelectionData] = useState(null);


    return (
        <div>
            <div>
                {numbers.map((number) => (
                    <NumberButton key={number} number={number} onClick={() => setNumberSelectionData(number)} />
                ))}
            </div>
            <div>
                <SuitButton suit="Man" onClick={(suit) => setSuitSelectionData(suit)} />
                <SuitButton suit="Pin" onClick={(suit) => setSuitSelectionData(suit)} />
                <SuitButton suit="Sou" onClick={(suit) => setSuitSelectionData(suit)} />
            </div>
            <label>
                <Checkbox
                    name="meld"
                    checked={checkboxes.meld}
                    onChange={handleBoxChangeEvent}
                    disabled={checkboxes.triple || checkboxes.pair} // Disable if other checkboxes are checked
                />
                Meld
            </label>
            <label>
                <Checkbox
                    name="triple"
                    checked={checkboxes.triple}
                    onChange={handleBoxChangeEvent}
                    disabled={checkboxes.meld || checkboxes.pair} // Disable if other checkboxes are checked
                />
                Triple
            </label>
            <label>
                <Checkbox
                    name="pair"
                    checked={checkboxes.pair}
                    onChange={handleBoxChangeEvent}
                    disabled={checkboxes.meld || checkboxes.triple} // Disable if other checkboxes are checked
                />
                Pair
            </label>
            <div>
                <h2>Selected Options:</h2>
                <p>Meld: {checkboxes.meld ? 'Checked' : 'Unchecked'}</p>
                <p>Triple: {checkboxes.triple ? 'Checked' : 'Unchecked'}</p>
                <p>Pair: {checkboxes.pair ? "Checked" : "Unchecked"} </p>
                <p> number: {NumberSelectionData}</p> 
                <p>suit: {SuitSelectionData}</p>
            </div>
        </div>
    );
}
