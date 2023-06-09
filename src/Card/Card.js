import Ingredients from '../Ingredients/Ingredients';
import Media from '../Media/Media';
import Cousine from '../Cousine/Cousine';
import { FLAGS, CUISINE_IMG, FULL_RECIPE_URL, GET_RECIPE_BY_INDEX, DIFFICULTY } from "../utils/config";
import React, { useEffect, useState } from 'react'

import './Card.css';

function Card() {
    const [cuisine, setCuisine] = useState();
    const [searchKeyword, setSearchKeyword] = useState(0);

    async function loadData() {
        try {
            if (+searchKeyword >= 0 && +searchKeyword <= 2) {
                const response = await fetch(`${GET_RECIPE_BY_INDEX}/${+searchKeyword+2}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    }
                });
                const json = await response.json();
                setCuisine(json?.message);
            }
        } catch {
            console.log('Cuisine not fetched');
        }
    }

    useEffect(() => {
        loadData();
    }, [searchKeyword]);

    return cuisine && (
        <div className='card'>
            <div className='search'>
                <img src={require('../assets/Search.png')} alt='' className='icon'/>
                <input placeholder='Search cuisine' onChange={(e) => setSearchKeyword(e.target.value)}/>
            </div>
            <div className='header'>
                <div className='title-content'>
                    <img src={FLAGS[cuisine.origin]} alt=''/>
                    <span className='cousine-name'>{cuisine.name}</span>
                </div>
                <div className='urls'>
                    <Media url='https://twitter.com/i/flow/login' src={require('../assets/Twitter.png')}/>
                    <Media url='https://web.telegram.org/a/' src={require('../assets/Telegram.png')}/>
                    <Media url='https://medium.com/' src={require('../assets/Medium.png')}/>
                    <Media url='https://www.instagram.com/' src={require('../assets/language.png')}/>
                </div>
            </div>
            <div className='cousine-details'>
                <Cousine difficulty={DIFFICULTY[cuisine.difficulty]} description={cuisine.description} cousine_img={CUISINE_IMG[cuisine.origin]} link={FULL_RECIPE_URL[cuisine.origin]}/>
            </div>
            <div className='ingredient-details'>
                <Ingredients protein={cuisine.protein} produce={cuisine.produce} oil={cuisine.cookingOil} spice={cuisine.spice} origin={cuisine.origin}
                    volume={cuisine.volume} serves={cuisine.serves} authenticity={cuisine.authenticity} stock={cuisine.stock}/>
            </div>
        </div>
    )
}

export default Card;