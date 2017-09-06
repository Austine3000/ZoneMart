import * as types from '../actions/type';

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_CART_SUCCESS:
            return [...state,
                Object.assign({}, action.product)
            ];
        case types.DELETE_CART_SUCCESS:
            return [...state.filter(product => product.id !== action.product.id)];
        default:
            return state;
    }
}