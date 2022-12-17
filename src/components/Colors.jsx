import React from 'react'
import { useNavigate } from 'react-router-dom';


const Colors = ( { colorValue , id , setId } ) => {
    const navigate = useNavigate()

    function gotoNewColor (id) {
       setId(id)
       navigate('/new')
    }
  return (
    <div>
        <button className='btn' onClick={() => gotoNewColor(id)}>{colorValue}</button>
    </div>
  )
}

export default Colors