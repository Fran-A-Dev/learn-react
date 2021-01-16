import { useState } from 'react';
import './App.css';
import Button from './Button.js';

function App() {
  const [color, setColor] = useState('white');

  return (
    <div
      className={`App`}
      style={{
        backgroundColor: color,
      }}
    >
      <div className="container">
        <h1>Fran's React JS Disco Ball</h1>
        <Button color="red" setColor={setColor} />
        <Button color="yellow" setColor={setColor} />
        <Button color="blue" setColor={setColor} />
        <Button color="purple" setColor={setColor} />
        <Button color="tomato" setColor={setColor} />
        <Button color="hotpink" setColor={setColor} />
      <p>Welcome to my React JS Party!!!  This is where coding under the influence is legal!</p>
      
      </div>
    </div>
  );
}

export default App;