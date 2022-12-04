import React, { useState, useEffect } from 'react';
import './App.css';

const Child = ({ onButtonClick }) => {
  console.log('Child Render')
  return (
    <button onClick={onButtonClick}>button</button>
  )
}

function App() {
  console.log('App render')
  const [number, setNumber] = useState(0)

  const addClick = () => {
    setNumber(1)
  }
  useEffect(() => {
    console.log('effect' + number)
  }, [number])

  return (
    <div>
      <Child onButtonClick={addClick} />
    </div>
  )
}


export default App;
