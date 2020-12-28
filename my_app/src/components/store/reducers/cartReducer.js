import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SET_DATA,
} from '../actions/action-types/cart-actions';

const initState = {
  items: [
    {
      id: 1,
      img_url: 'https://cdn.27.ua/499/af/a1/241569_2.jpeg',
      brand: 'Fiskars',
      description: 'desc',
      price: 123,
    },
    {
      id: 2,
      img_url: 'https://cdn.27.ua/499/af/a1/241569_2.jpeg',
      brand: 'Fiskars2',
      description: 'desc',
      price: 222,
    },
    {
      id: 3,
      img_url: 'https://cdn.27.ua/499/af/a1/241569_2.jpeg',
      brand: 'Fiskars3',
      description: 'desc',
      price: 435,
    },
    {
      id: 4,
      img_url: 'https://cdn.27.ua/499/af/a1/241569_2.jpeg',
      brand: 'Fiskars4',
      description: 'desc',
      price: 555,
    },
    {
      id: 5,
      img_url: 'https://cdn.27.ua/499/af/a1/241569_2.jpeg',
      brand: 'Fiskars5',
      description: 'desc',
      price: 567,
    },
    {
      id: 6,
      img_url: 'https://cdn.27.ua/499/af/a1/241569_2.jpeg',
      brand: 'Fiskars6',
      description: 'desc',
      price: 333,
    },
  ],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  // if (action.type === SET_DATA) {
  //   console.log({ items: state.items });

  //   return {
  //     ...state,
  //     items: [...state.items, action.payload],
  //   };
  // }

  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);

    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === 'SUB_SHIPPING') {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
