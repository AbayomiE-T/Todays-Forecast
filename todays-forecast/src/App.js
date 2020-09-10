import React from 'react';
import Form from './components/Form'
import Weather from './components/Weather'

function App() {
  return (
    <div className="container">
      <p>Today's cloudy with a chance of meatballs</p>
      <Form />
      <Weather />
    </div>
  );
}

export default App;
