import React from 'react';
import { Link } from 'react-router-dom';
export default function Blue() {
  return (
    <div  style={{backgroundColor: 'blue' , color: 'white', padding: '4rem' , height: "100vh"}}>
       <div>
      <h1>This is Color Blue with Hex #3008FD</h1>
      <Link to="/" className='color-list' style={{color:"red"}}>Go Back</Link>
    </div>
    </div>
  );
}
