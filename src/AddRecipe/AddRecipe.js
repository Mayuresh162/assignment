import React, { useState } from 'react'
import { ADD_RECIPE } from '../utils/config';
import './AddRecipe.css'

function AddRecipe({ setAddRecipe, callback }) {

    const [recipe, setRecipe] = useState({
        name: '',
        origin: '',
        description: '',
        difficulty: 0,
        protein: '',
        spice: '',
        cookingOil: '',
        volume: 0,
        produce: '',
        serves: 0,
        authenticity: '',
        stock: ''
    });

    function inputHandler(key, e) {
        const {value} = e.target;
        setRecipe(prev => ({...prev, [key]: key === 'difficulty' || key === 'serves' || key === 'volume' ? +value : value}));
    }

    async function addRecipeHandler() {
        const response = await fetch(`${ADD_RECIPE}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            },
            body: JSON.stringify(recipe),
            method: 'POST'
        });
        const json = await response.json();
        console.log(json);
        setAddRecipe({
            name: '',
            origin: '',
            description: '',
            difficulty: 0,
            protein: '',
            spice: '',
            cookingOil: '',
            volume: 0,
            produce: '',
            serves: 0,
            authenticity: '',
            stock: ''
        });
    }

    return (
        <div className='card'>
            <div className='add-header' onClick={() => {
                setAddRecipe(false);
                callback();
            }}>
                <img src={require('../assets/back.png')} alt='' className='back' />
                <span className='add-title'>Add new recipe</span>
            </div>
            <div>
                <span className='h-divider'></span>
            </div>
            <div className='content-holder'>
                <div className='item-holder marginRight'>
                    <span className='add-heading'>Name</span>
                    <input onChange={(e) => inputHandler('name', e)}/>
                </div>
                <div className='item-holder'>
                    <span className='add-heading'>Origin</span>
                    <input placeholder='Country origin' maxLength='2' onChange={(e) => inputHandler('origin', e)}/>
                </div>
            </div>
            <div className='content-holder flexDirection'>
                <span className='add-heading'>Description</span>
                <textarea placeholder='Describe your recipe...' onChange={(e) => inputHandler('description', e)} maxLength='200'/>
                <span className='character'>{ recipe.description.length }/200 characters</span>
            </div>
            <div className='content-holder'>
                <div className='item-holder marginRight'>
                    <span className='add-heading'>Difficulty</span>
                    <select name='difficulty' onChange={(e) => inputHandler('difficulty', e)}>
                        <option value={0}>Easy</option>
                        <option value={1}>Medium</option>
                        <option value={2}>Hard</option>
                    </select>
                </div>
                <div className='item-holder'>
                    <span className='add-heading'>Protein</span>
                    <input onChange={(e) => inputHandler('protein', e)} />
                </div>
            </div>
            <div className='content-holder'>
                <div className='item-holder marginRight'>
                    <span className='add-heading'>Spices</span>
                    <input onChange={(e) => inputHandler('spice', e)} />
                </div>
                <div className='item-holder'>
                    <span className='add-heading'>Cooking Oil</span>
                    <input onChange={(e) => inputHandler('cookingOil', e)} />
                </div>
            </div>
            <div className='content-holder'>
                <div className='item-holder marginRight'>
                    <span className='add-heading'>Volume/Weight</span>
                    <input type='number' onChange={(e) => inputHandler('volume', e)} />
                </div>
                <div className='item-holder'>
                    <span className='add-heading'>Produce</span>
                    <input onChange={(e) => inputHandler('produce', e)} />
                </div>
            </div>
            <div className='content-holder'>
                <div className='item-holder marginRight'>
                    <span className='add-heading'>Serves</span>
                    <input placeholder='people' type='number' onChange={(e) => inputHandler('serves', e)} />
                </div>
                <div className='item-holder'>
                    <span className='add-heading'>Authenticity</span>
                    <input onChange={(e) => inputHandler('authenticity', e)} />
                </div>
            </div>
            <div className='content-holder flexDirection'>
                <span className='add-heading'>Stock</span>
                <input className='stock-input' onChange={(e) => inputHandler('stock', e)} />
            </div>
            <button onClick={() => addRecipeHandler()}>Add Recipe</button>
        </div>
    )
}

export default AddRecipe;