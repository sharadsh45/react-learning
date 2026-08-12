import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () =>{
    setCounter(counter+1)
  }
  const removeValue = () =>{
    setCounter(counter-1)
  }

  return (
    <div className="container">
      <h2>Counter</h2>
      <div className="counter-display">{counter}</div>
      <div className="button-group">
        <button onClick={addValue}>➕ Add</button>
        <button onClick={removeValue}>➖ Remove</button>
      </div>
      <footer>Sharad Sharma</footer>
    </div>
  )
}

export default App
