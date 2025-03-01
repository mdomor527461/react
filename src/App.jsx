import './App.css'
import Hello from './components/Hello';
import Button from './components/Button';
import ConditionalJsx from './components/ConditionalJsx';
import Form from './components/Form';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Parent from './components/Parent';

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
      <Parent/>
      <Hello fruits = {fruits}/>
      <Button color = "green"/>
      <ConditionalJsx/>
      <Form/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
