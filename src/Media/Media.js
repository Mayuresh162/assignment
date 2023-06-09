import React from 'react';
import './Media.css';

function Media({src, url}) {
  return (
    <div className='url'>
      <img src={src} alt='' className='src-icon' onClick={() => window.open(url, "_blank")}/> 
    </div>
  )
}

export default Media;