import React from 'react';
import { Link } from 'react-router-dom';
import { GetColorName } from 'hex-color-to-color-name';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid'

//From the developer that refactor your code
/* from ur code functionality description i observed you having both input and select values to get the color data
is a bit irrelevant because a user might not get the exact color hex code for the name inputed which can results to bugs
so i made some few changes which u can also add too to make it a better app */
//feel free to reach out to me for any futher inquiries.....
//PS.....learn more.....


export default function AddColor({  setColor }) {

 const navigate = useNavigate()

  const changeColor = (e) => {
     setColor(prevColor => [...prevColor , { value:e.target.value, colorValue:GetColorName(e.target.value) , id:nanoid() }]);

  }
  
  function updatedColor () {
       navigate('/')
  }

  


  return (
 <div>
       <div className='form-container'>
      <form action="">
        <label htmlFor="color">Enter a Color</label>
        <label htmlFor="color">Select Color</label>
        <input type="color"  id='select-color' onChange={changeColor}/><br />
        <button  onClick={updatedColor}>Add Color</button>
        </form> 
        <Link to="/">Go back to Home</Link>
    </div>
   
 </div>
  );
}

