import { React } from 'react';
import { Link } from 'react-router-dom';

export default function NewColor({inputValue,  color}) {
 let updatedColor = color ;
  return (
  
        <div style={{backgroundColor:inputValue, color: "black",  padding: '8rem',  height: "100vh"}}>
     <h2 >This is a  {updatedColor} color  with Hex code {inputValue}</h2>
     <Link to="/"className='color-list' >Go Back</Link>
     </div>
  
  );
}
