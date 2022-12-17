// import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Colors from './Colors';


export default function Navbar({ color , setId }) {

  return (
    <div className='main-page'>
      <div className='nav'>
          <h1>Welcome to the Color Factory</h1>
            <Link to='/add'>Add a Color</Link>
        </div>
      <div className='body'>
        <h2> Please Select a Color </h2>

        </div>
        {color.map((cols) => {
          return (
            <div key={cols.id}>
              <Colors value={cols.value} colorValue={cols.colorValue}  id={cols.id}  setId={setId} />
            </div>
              
          );
        })}

        <div className='flex'>
          <li><Link to='/red'>Red</Link></li>
          <li><Link to='/green'>Green</Link></li>
          <li><Link to='/blue'>Blue</Link></li>
        </div>
    </div>
  );
}
