import React, { Fragment } from 'react';
import EnterCity from './components/EnterCity'
import WeatherDetails from './components/WeatherDetails'

function App() {
  return (
    <Fragment>
      <EnterCity />
      <WeatherDetails />
    </Fragment>
  );
}

export default App;
