import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
   const [btn1Text, setBtn1Text] = useState('OFF');
  const [btn2Text, setBtn2Text] = useState('ON');
 function handleClick() {
    setBtn1Text(btn1Text === 'OFF' ? 'ON' : 'OFF');
    setBtn2Text(btn2Text === 'OFF' ? 'ON' : 'OFF');
  }
  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {/* assign value for button 1 */btn1Text}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {/* assign value for button 2 */btn2Text}
      </button>
    </div>
  );
}


export default App;
