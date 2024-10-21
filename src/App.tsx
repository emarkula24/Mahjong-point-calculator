import { useState } from 'react';
import './App.css';
import { tiles } from "./components/Tiles.js";
import RenderHandSelection from "./components/RenderHandSelection.tsx"; // Assuming this component uses userHand
import DeleteSelectionButton from './components/DeleteSelectionButton.tsx';
function App() {
  const [userHand, setUserHand] = useState([]); // Move useState inside the component


  
  return (
    <>
      <RenderHandSelection userHand={userHand} setUserHand={setUserHand} />
      <p>Your Hand: {userHand.map(tile => tile.value).join(', ')}</p> {/* Display selected tile values */}
      <DeleteSelectionButton userHand={userHand} setUserHand={setUserHand} />
    </>
  );
}

export default App;
