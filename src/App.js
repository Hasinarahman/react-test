import React from 'react';
import { DragonsProvider } from './context/DragonsContext';
import DragonsList from './components/DragonsList';

function App() {
  return (
    <DragonsProvider>
      <div className="App">
        <h1 className="text-4xl text-center my-6">Space Travelers' Hub - Dragons</h1>
        <DragonsList />
      </div>
    </DragonsProvider>
  );
}

export default App;
