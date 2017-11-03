import * as types from '../actions/type';

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_CART_SUCCESS:
            return [...state,
                Object.assign({}, action.product)
            ];
        case types.DELETE_CART_SUCCESS:
            return [...state.filter(product => product.id !== action.product.id)];
        case types.ADD_TO_CART:
             return Object.assign([],action.cartgoods);
         case types.UPDATE_CART:
             return Object.assign([],action.newcart);
        case types.REMOVE_FROM_CART:
                   return [... state.filter(good=>good.id != action.goodId)]
        default:
            return state;
    }
}




