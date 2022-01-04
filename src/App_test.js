import {useState} from 'react';

const App = () => {
  const [number, setNumber] = useState(0);

  const numberChangePlus = () => {
    setNumber(number+1);
  }

  const numberChangeMinus = () => {
    if(number === 0)return;
    setNumber(number-1);
  }

  return <div style={{margin: '400px 0 0 400px '}}>
    <button onClick={numberChangeMinus}>
      -
    </button>
    <span style={{margin: '0 16px'}}>
      {number}
    </span>
    <button onClick={numberChangePlus}>
      +
    </button>
  </div>
}
 export default App;