
import { UserHandProvider } from './components/userHandProvider.tsx';
import AppContent from './components/AppContent.tsx';

function App() {
  
  return (
    <UserHandProvider>
      <AppContent />
    </UserHandProvider>
  );
}

export default App;
