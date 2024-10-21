import { useState } from 'react';
import { tiles } from "./components/Tiles.js";
import RenderHandSelection from "./components/RenderHandSelection.tsx"; // Assuming this component uses userHand
import DeleteSelectionButton from './components/DeleteSelectionButton.tsx';
import { UserHandProvider } from './components/userHandProvider.tsx';
import AppContent from './components/AppContent.tsx';

function App() {
  const [userHand, setUserHand] = useState([]); // Move useState inside the component
  
  return (
    <UserHandProvider>
      <AppContent />
    </UserHandProvider>
  );
}

export default App;
