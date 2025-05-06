import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
      <div className="App">
        <h1>Button Showcase</h1>
        <div className="button-grid">
          <Button label="Default" />
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Outline" variant="outline" />
          <Button label="Danger" variant="danger" />
          <Button label="Blue" variant="blue" />
        </div>
      </div>
  );
}

export default App;