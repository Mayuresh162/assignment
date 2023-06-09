// export const cuisineList = [
//     {
//         id: 1,
//         flag: require('../assets/flag1.png'),
//         name: 'Spanish Paella',
//         full_recipe: 'https://medium.com/@VolpiFoods/spanish-lullaby-grilled-seafood-paella-222dc456d18c',
//         cousine_img: require('../assets/spanish_paella.png'),
//         difficulty_level: 'Medium',
//         description: `Spanish Paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area.`,
//         ingredients: {
//             type: {
//                 food: 'Seafood',
//                 content: 'Jumbo Shrimp'
//             },
//             produce: ['Onion', 'Tomatoes'],
//             spices: ['Bay Leaf', 'Saffron'],
//             oil: {
//                 type: 'Olive Oil',
//                 content: 'Spanish Olive Oil'
//             },
//             volume: '700g',
//             serves: 4,
//             authenticity: 'Unverified',
//             stock: 'Chicken'
//         }   
//     },
//     {
//         id: 2,
//         flag: require('../assets/flag2.jpg'),
//         name: 'Pav Bhaji',
//         full_recipe: 'https://medium.com/ready-to-taste/pav-bhaji-recipe-3ca887d899e2',
//         cousine_img: require('../assets/pavbhaji.png'),
//         difficulty_level: 'Easy',
//         description: `Pav Bhaji is a street food dish that originated in the Mumbai city of India. It was originally made with ingredients such as bread, potatoes, onions, and tomatoes, which were common in the area.`,
//         ingredients: {
//             type: {
//                 food: 'Street food',
//                 content: 'Bread'
//             },
//             produce: ['Onions', 'Tomatoes'],
//             spices: ['Chillies', 'Bell Peppers'],
//             oil: {
//                 type: 'Butter',
//                 content: 'Amul Butter'
//             },
//             volume: '500g',
//             serves: 2,
//             authenticity: 'Unverified',
//             stock: 'Potatoes'
//         }   
//     },
//     {
//         id: 3,
//         flag: require('../assets/flag3.png'),
//         name: 'Tiramisu',
//         full_recipe: 'https://medium.com/@lilye/the-best-tiramisu-recipe-classic-ad29d8712749',
//         cousine_img: require('../assets/tiramisu.png'),
//         difficulty_level: 'Hard',
//         description: `Tiramisu is a traditional dessert that originated in the Veneto region of Italy. It was originally made with ingredients such as eggs, sugar, and cheese, which were common in the area.`,
//         ingredients: {
//             type: {
//                 food: 'Desert',
//                 content: 'Savoiardi'
//             },
//             produce: ['Coffee', 'Eggs'],
//             spices: ['Sugar', 'Cocoa'],
//             oil: {
//                 type: 'Cheese',
//                 content: 'Mascorpone Cheese'
//             },
//             volume: '600g',
//             serves: 8,
//             authenticity: 'Verified',
//             stock: 'Milk'
//         }   
//     }
// ]

export const GET_RECIPE = 'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes'
export const ADD_RECIPE = 'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes'
export const GET_RECIPE_BY_NUMBER = 'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes'
export const GET_RECIPE_BY_INDEX = 'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes'

export const DIFFICULTY = {
    '0': 'Easy',
    '1': 'Medium',
    '2': 'Hard',
}

export const FLAGS = {
    'sp': require('../assets/flag1.png'),
    'in': require('../assets/flag2.jpg'),
    'it': require('../assets/flag3.png'),
}

export const CUISINE_IMG = {
    'sp': require('../assets/spanish_paella.png'),
    'in': require('../assets/pavbhaji.png'),
    'it': require('../assets/tiramisu.png'),
}

export const FULL_RECIPE_URL = {
    'sp': 'https://medium.com/@VolpiFoods/spanish-lullaby-grilled-seafood-paella-222dc456d18c',
    'in': 'https://medium.com/ready-to-taste/pav-bhaji-recipe-3ca887d899e2',
    'it': 'https://medium.com/@lilye/the-best-tiramisu-recipe-classic-ad29d8712749',
}

export const OIL_TYPE = {
    'sp': 'Oil',
    'in': 'Butter',
    'it': 'Cheese',
}

export const FOOD_TYPE = {
    'sp': 'Seafood',
    'in': 'Street Food',
    'it': 'Dessert',
}