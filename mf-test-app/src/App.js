import React, { lazy, Suspense } from 'react';
import './App.css';

const Header = lazy(() => import('HeaderApp/Header'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading module...</div>}>
        <Header />
      </Suspense>
      <div className="Content">ModuleFederationExample. Main app. <br/> (Albert Khabibullin)</div>
    </div>
  );
}

export default App;
