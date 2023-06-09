import React from 'react';
import './Cousine.css'

function Cousine({difficulty, cousine_img, description, link}) {
  return (
    <div className='cousine'>
      <div className='cousine-header'>
        <img src={cousine_img} alt='' className='cousine_image'/>
        <span className='difficulty'>Difficulty: {difficulty}</span>
      </div>
      <div className='description'>{description}</div>
      <button onClick={() => window.open(link, "_blank")}>View Full Recipe</button>
    </div>
  )
}

export default Cousine;