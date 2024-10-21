import { useState } from 'react';
import './App.css';
import RenderButtons from './components/RenderButtons';
import { tiles } from "./Tiles.js";

function App() { 

  const [userHand, setUserHand] = useState([]);

  return (
    <>
    < RenderButtons />
    </>
  )
}

export default App
