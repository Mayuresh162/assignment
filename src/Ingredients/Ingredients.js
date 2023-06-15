import React from 'react'
import './Ingredients.css';
import { FOOD_TYPE, OIL_TYPE } from "../utils/config";


function Ingredients({ produce, protein, spice, volume, authenticity, stock, oil, serves, origin }) {
  return (
    <div className='ingredient'>
      <div className='leftside'>
        <div className='item'>
          <span className='heading'>{FOOD_TYPE[origin] || 'Food'}</span>
          <span className='content'>{protein}</span>
        </div>
        <div className='item'>
          <span className='heading'>Spices</span>
          <span className='content'><span className='spice1'>{spice}</span></span>
        </div>
        <div className='item'>
          <span className='heading'>Volume/Weight</span>
          <span className='content'>{volume + 'g'}</span>
        </div>
        <div className='item'>
          <span className='heading'>Authenticity</span>
          <span className={`content authentic`}>{authenticity}</span>
        </div>
      </div>
      <div className='rightside'>
        <div className='item'>
          <span className='heading'>Produce</span>
          <span className='content'><span className='produce1'>{produce.split(',')[0]}</span><span>{' / '}</span><span className='produce2'>{produce.split(',')[1]}</span></span>
        </div>
        <div className='item'>
          <span className='heading'>Oil</span>
          <span className={`content oil`}>{oil}</span>
        </div>
        <div className='item'>
          <span className='heading'>Serves</span>
          <span className='content'>{serves}</span>
        </div>
        <div className='item'>
          <span className='heading'>Stock</span>
          <span className={`content stock`}>{stock}</span>
        </div>
      </div>
    </div>
  )
}

export default Ingredients;