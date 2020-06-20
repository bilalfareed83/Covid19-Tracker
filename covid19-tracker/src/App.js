import React, { Suspense } from 'react';
import './App.css';
// import CountriesResult from './components/CountriesResult';
// import CountryTable from './components/CountryTable';
function App() {
  const Cards = React.lazy(() => import('./components/Cards'));
  const CountriesResult = React.lazy(() =>
    import('./components/CountriesResult')
  );
  const CountryTable = React.lazy(() => import('./components/CountryTable'));
  const Charts = React.lazy(() => import('./components/Charts'));
  return (
    <div className="App">
      <Suspense fallback="loading...">
        <Cards />
        {/* <Suspense fallback="Loading">
          <CountriesResult />
          <CountryTable />
        </Suspense> */}
        <Charts />
      </Suspense>
    </div>
  );
}

export default App;
