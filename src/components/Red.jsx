import React from 'react';
import { Link } from 'react-router-dom';
export default function Red() {
  return (
    <div style={{backgroundColor: "red", color: 'white', padding: '4rem' ,  height: "100vh"}}>
      <h1 >This is Color Red with Hex #EC0909</h1>
      <Link to="/"className='color-list' >Go Back</Link>
    </div>
  );
}
