import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from './components/Hello';
import Button from './components/Button';
import ConditionalJsx from './components/ConditionalJsx';
import Form from './components/Form';

function App() {
  const fruits = [
    { name: "Apple", color: "red", taste: "sweet" },
    { name: "Banana", color: "yellow", taste: "sweet" },
    { name: "Orange", color: "orange", taste: "citrus" },
    { name: "Grapes", color: "purple", taste: "sweet" },
    { name: "Mango", color: "orange", taste: "tropical" }
  ];
  return (
    <div className="App">
      {/* <Hello fruits = {fruits}/> */}
      {/* <Button color = "green"/>
      <ConditionalJsx/> */}
      <Form/>
    </div>
  )
}

export default App
