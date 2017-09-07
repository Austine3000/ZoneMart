import {combineReducers} from 'redux';
<<<<<<< HEAD
import products from './cartReducer';
import productInfo from './checkoutReducer';
import * as types from '../actions/type';
import auth from './auth';

const appReducer = combineReducers({
    auth,
    products,
    productInfo
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }

    return appReducer(state, action);
}

=======

import products from './shoppingReducer';
import cart from './cartReducer';
import invoiceInfo from './invoiceReducer';

const rootReducer = combineReducers({
    
    products,
    cart,
    invoiceInfo
})

>>>>>>> e5634d6d865b6e6541ac790451606e4487cd96af
export default rootReducer;