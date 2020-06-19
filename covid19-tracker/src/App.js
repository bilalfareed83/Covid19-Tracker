import React, { Suspense } from 'react';
import './App.css';
import CountriesResult from './components/CountriesResult';
import CountryTable from './components/CountryTable';
function App() {
  const Cards = React.lazy(() => import('./components/Cards'));
  return (
    <div className="App">
      <Suspense fallback="loading...">
        <Cards />
        <Suspense fallback="Loading">{/* <CountriesResult /> */}</Suspense>
        <CountryTable />
      </Suspense>
    </div>
  );
}

export default App;
