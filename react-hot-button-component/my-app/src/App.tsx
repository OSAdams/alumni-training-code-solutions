import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const buttonStatus =
    count >= 18
      ? 'white'
      : count >= 15
      ? 'yellow'
      : count >= 12
      ? 'orange'
      : count >= 9
      ? 'violet'
      : count >= 6
      ? 'red'
      : count >= 3
      ? 'purple'
      : 'indigo';

  return (
    <>
      <h1>Clicks: {count}</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          className={buttonStatus}>
          The Button
        </button>
        <p>Click the button!</p>
        <p className="reset" onClick={() => setCount((count) => count - count)}>
          RESET
        </p>
      </div>
    </>
  );
}

export default App;
