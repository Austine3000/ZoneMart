import * as types from '../actions/type';

export default function checkoutReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_CHECKOUT_SUCCESS:
            return [...state,
                Object.assign({}, action.productInfo)
            ];
        default:
            return state;
    }
}