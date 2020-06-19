import React, { Suspense } from 'react';
import './App.css';
import CountriesResult from './components/CountriesResult';

function App() {
  const Cards = React.lazy(() => import('./components/Cards'));
  return (
    <div className="App">
      <Suspense fallback="loading...">
        <Cards />
        <CountriesResult />
      </Suspense>
    </div>
  );
}

export default App;
