import { useState } from "react";
import Checkbox from "./Checkbox";
export default function RenderButtons() {
    const [checkboxes, setCheckBoxes] = useState({
        meld: false,
        triple: false,
        pair: false
    });

    // Unified event handler for both checkboxes
    function handleBoxChangeEvent(event) {
        const { name, checked } = event.target;
        setCheckBoxes((previousCheckBoxes) => ({
            ...previousCheckBoxes,
            [name]: checked,
        }));
    }

    return (
        <div>
            <label>
                <Checkbox
                    name="meld"
                    checked={checkboxes.meld}
                    onChange={handleBoxChangeEvent}
                />
                Meld
            </label>
            <label>
                <Checkbox
                    name="triple"
                    checked={checkboxes.triple}
                    onChange={handleBoxChangeEvent}
                />
                Triple
            </label>
            <label>
                <Checkbox
                name="pair"
                checked={checkboxes.pair}
                onChange={handleBoxChangeEvent}
                />
                Pair
            </label>
            <div>
                <h2>Selected Options:</h2>
                <p>Meld: {checkboxes.meld ? 'Checked' : 'Unchecked'}</p>
                <p>Triple: {checkboxes.triple ? 'Checked' : 'Unchecked'}</p>
                <p>Pair: {checkboxes.pair ? "Checked" : "Unchecked"} </p>
            </div>
        </div>
    );
}