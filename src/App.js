import { useState } from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Red from './components/Red';
import Green from './components/Green';
import Blue from './components/Blue';
import AddColor from './components/AddColor';
import NewColor from './components/NewColor';


function App() {
  const[inputValue , setInputValue] = useState("");
  const[color , setColor] = useState("");
  
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Navbar
          inputValue={inputValue}
          color={color}
         
        />}/>
        <Route path='/add' element={<AddColor 
        setInputValue={setInputValue}
        setColor={setColor}
      
        />}/>
        <Route  path="/new" element={<NewColor 
         inputValue={inputValue}
         color={color}
      
        />}/>
        <Route  path="/red" element={<Red/>}/>
        <Route path='/green'  element={<Green/>}/>
        <Route  path='/blue' element={<Blue/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
