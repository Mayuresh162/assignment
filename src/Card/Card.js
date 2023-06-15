import Ingredients from '../Ingredients/Ingredients';
import Media from '../Media/Media';
import Cousine from '../Cousine/Cousine';
import { FLAGS, CUISINE_IMG, FULL_RECIPE_URL, GET_RECIPE_BY_INDEX, DIFFICULTY, GET_RECIPE } from "../utils/config";
import { filterData, generateRandomNumber } from '../utils/helper';
import React, { useEffect, useState } from 'react'
import './Card.css';
import AddRecipe from '../AddRecipe/AddRecipe';

function Card() {
    const [cuisine, setCuisine] = useState();
    const [cuisineList, setCuisineList] = useState([]);
    const [addRecipe, setAddRecipe] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    useEffect(() => {
        const storedCuisineList = localStorage.getItem('cuisineList');
        if (storedCuisineList) {
            setCuisineList(JSON.parse(storedCuisineList));
            setCuisine(JSON.parse(storedCuisineList)[2]);
        } else {
            getCuisines();
        }
    }, []);

    useEffect(() => {
        if (searchKeyword) {
            const filteredList = filterData(searchKeyword, cuisineList);
            setShowSuggestion(true);
            setSuggestions(filteredList);
        } else {
            setSuggestions([]);
        }
    }, [searchKeyword, cuisineList]);

    async function getCuisines() {
        const response = await fetch(`${GET_RECIPE}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            },
        });
        const json = await response.json();
        setCuisineList(json?.message);
        localStorage.setItem('cuisineList', JSON.stringify(json?.message));
    }

    const handleCallback = () => {
        getCuisines();
    };

    function getCuisine(itemName) {
        setSuggestions('');
        setSearchKeyword('');
        cuisineList.forEach((item, i) => {
            if (item.name === itemName) {
                loadData(i);
            }
        })
    }

    async function loadData(index) {
        const response = await fetch(`${GET_RECIPE_BY_INDEX}/${index}`,
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

    if (addRecipe) {
        return <AddRecipe setAddRecipe={setAddRecipe} callback={handleCallback} />;
    }

    return cuisine && (
        <div className='card'>
            <div className='search'>
                <img src={require('../assets/Search.png')} alt='' className='icon' />
                <input placeholder='Search cuisine' onChange={(e) => setSearchKeyword(e.target.value)} value={searchKeyword} />
            </div>
            {suggestions.length > 0 &&
                <div className="suggestion">
                    {showSuggestion && suggestions.map((s, index) => (
                        <div key={index} className="list" onClick={() => getCuisine(s.name)} >
                            <span className='recipe-details'>
                                <img src={FLAGS[s.origin] || s.origin} alt="" />
                                <span className='name'>{s.name}</span>
                            </span>
                            <span className='recipe-details'>
                                {s.difficulty === 0 && <img src={require('./../assets/easy.png')} alt='' className='difficulty-level' />}
                                {s.difficulty === 1 && <img src={require('./../assets/medium.png')} alt='' className='difficulty-level' />}
                                {s.difficulty === 2 && <img src={require('./../assets/hard.png')} alt='' className='difficulty-level' />}
                                <span className='name'>{DIFFICULTY[s.difficulty] || s.difficulty}</span>
                                <span className='divider'></span>
                                <span className='name'>{generateRandomNumber()} mins</span>
                            </span>
                        </div>
                    ))}
                </div>
            }
            <div className='header'>
                <div className='title-content'>
                    <img src={FLAGS[cuisine.origin]} alt='' />
                    <span className='name'>{cuisine.name}</span>
                </div>
                <div className='urls'>
                    <Media url='https://twitter.com/i/flow/login' src={require('../assets/Twitter.png')} />
                    <Media url='https://web.telegram.org/a/' src={require('../assets/Telegram.png')} />
                    <Media url='https://medium.com/' src={require('../assets/medium-logo.png')} />
                    <div><button className='add-btn' onClick={() => setAddRecipe(true)}>+Add Recipe</button></div>
                </div>
            </div>
            <div className='cousine-details'>
                <Cousine difficulty={DIFFICULTY[cuisine.difficulty]} description={cuisine.description} cousine_img={CUISINE_IMG[cuisine.origin]} link={FULL_RECIPE_URL[cuisine.origin]} />
            </div>
            <div className='ingredient-details'>
                <Ingredients protein={cuisine.protein} produce={cuisine.produce} oil={cuisine.cookingOil} spice={cuisine.spice} origin={cuisine.origin}
                    volume={cuisine.volume} serves={cuisine.serves} authenticity={cuisine.authenticity} stock={cuisine.stock} />
            </div>
        </div>
    )
}

export default Card;