import { createStore } from 'redux';

const initState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    {
      name: 'TV',
      category: 'electronics',
      description: 'Its a TV',
      image:
        'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1780&q=80',
      price: 700.0,
      inStock: 5,
    },
    {
      name: 'Radio',
      category: 'electronics',
      description: 'Its a Radio',
      image:
        'https://images.unsplash.com/photo-1584541728894-dbcae08f94ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      price: 100.0,
      inStock: 13,
    },
    {
      name: 'Computer',
      category: 'electronics',
      description: 'Its a Computer',
      image:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
      price: 900.0,
      inStock: 15,
    },
    {
      name: 'Keyboard',
      category: 'electronics',
      description: 'Its a Keyboard',
      image:
        'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      price: 50.0,
      inStock: 11,
    },
    {
      name: 'Xbox',
      category: 'electronics',
      description: 'Its a Xbox',
      image:
        'https://images.unsplash.com/photo-1577530124525-e0d410ca68a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
      price: 300.0,
      inStock: 25,
    },
    {
      name: 'Phone',
      category: 'electronics',
      description: 'Its a Phone',
      image:
        'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=718&q=80',
      price: 500.0,
      inStock: 15,
    },
    {
      name: 'Toaster',
      category: 'electronics',
      description: 'Its a Toaster',
      image:
        'https://images.unsplash.com/photo-1583729250536-d5fb10401671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
      price: 25.0,
      inStock: 15,
    },
    {
      name: 'Lightbulb',
      category: 'electronics',
      description: 'Its a Lightbulb',
      image:
        'https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      price: 8.0,
      inStock: 53,
    },
    {
      name: 'Stereo',
      category: 'electronics',
      description: 'Its a Stereo',
      image:
        'https://images.unsplash.com/photo-1584211970299-a7a65b35e758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
      price: 200.0,
      inStock: 7,
    },
    {
      name: 'Router',
      category: 'electronics',
      description: 'Its a Router',
      image:
        'https://images.unsplash.com/photo-1577538926988-7926820ed209?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      price: 220.0,
      inStock: 8,
    },
    {
      name: 'Shirt',
      category: 'clothing',
      description: 'Its a Shirt',
      image:
        'https://images.unsplash.com/flagged/photo-1564468781192-f023d514222d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      price: 20.0,
      inStock: 25,
    },
    {
      name: 'Pants',
      category: 'clothing',
      description: 'Its a Pants',
      image:
        'https://images.unsplash.com/photo-1584382296087-ac00c7263710?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
      price: 50.0,
      inStock: 30,
    },
    {
      name: 'Hat',
      category: 'clothing',
      description: 'Its a Hat',
      image:
        'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      price: 10.0,
      inStock: 9,
    },
    {
      name: 'Jacket',
      category: 'clothing',
      description: 'Its a Jacket',
      image:
        'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80',
      price: 60.0,
      inStock: 17,
    },
    {
      name: 'Scarf',
      category: 'clothing',
      description: 'Its a Scarf',
      image:
        'https://images.unsplash.com/photo-1457545195570-67f207084966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1538&q=80',
      price: 9.0,
      inStock: 25,
    },
    {
      name: 'Socks',
      category: 'clothing',
      description: 'Its a Socks',
      image:
        'https://images.unsplash.com/photo-1564379976409-79bd0786fff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      price: 12.0,
      inStock: 10,
    },
    {
      name: 'Steak',
      category: 'food',
      description: 'Its a Steak',
      image:
        'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      price: 15.0,
      inStock: 20,
    },
    {
      name: 'Bread',
      category: 'food',
      description: 'Its a Bread',
      image:
        'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      price: 3.0,
      inStock: 90,
    },
    {
      name: 'Apples',
      category: 'food',
      description: 'Its a Apples',
      image:
        'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
      price: 1.0,
      inStock: 500,
    },
    {
      name: 'Eggs',
      category: 'food',
      description: 'Its a Eggs',
      image:
        'https://images.unsplash.com/photo-1575278220902-cdf1a07a0421?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
      price: 2.0,
      inStock: 12,
    },
    {
      name: 'Bacon',
      category: 'food',
      description: 'Its a Bacon',
      image:
        'https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80',
      price: 8.0,
      inStock: 80,
    },
    {
      name: 'Pineapple',
      category: 'food',
      description: 'Its a Pineapple',
      image:
        'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      price: 5.0,
      inStock: 50,
    },
    {
      name: 'Strawberries',
      category: 'food',
      description: 'Its a Strawberries',
      image:
        'https://images.unsplash.com/photo-1575808142341-e39853744dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1084&q=80',
      price: 4.0,
      inStock: 14,
    },
    {
      name: 'Cake',
      category: 'food',
      description: 'Its a Cake',
      image:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80',
      price: 10.0,
      inStock: 10,
    },
    {
      name: 'Pie',
      category: 'food',
      description: 'Its a Pie',
      image:
        'https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      price: 10.0,
      inStock: 15,
    },
    {
      name: 'Gum',
      category: 'food',
      description: 'Its a Gum',
      image:
        'https://images.unsplash.com/photo-1576644461179-ddd318c669e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      price: 1.0,
      inStock: 200,
    },
    {
      name: 'Cucumber',
      category: 'food',
      description: 'Its a Cucumber',
      image:
        'https://images.unsplash.com/photo-1531170887152-6b21ba4ce8ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
      price: 2.0,
      inStock: 50,
    },
  ],
  currentCategory: 'electronics',
  cart: [],
};

const reducer = (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'SET_CURRENT_CATEGORY':
      newState.currentCategory = action.payload;
      break;
    case 'ADD_TO_CART':
      newState.cart = [...newState.cart, action.payload];
      break;
    case 'RESET_STORE':
      newState = initState;
      break;
    default:
      break;
  }

  return newState;
};

export default createStore(reducer);
export { reducer };
