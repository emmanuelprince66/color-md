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
  const[color , setColor] = useState([]);
  const [id , setId ] = useState('')
  
  
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Navbar
          color={color}
          setId={setId}
         
        />}/>
        <Route path='/add' element={<AddColor 
        setColor={setColor}
      
        />}/>
        <Route  path="/new" element={<NewColor 
        id={id}
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
