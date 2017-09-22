import {combineReducers} from 'redux';
//import products from './cartReducer';
import productInfo from './checkoutReducer';
import * as types from '../actions/type';
import auth from './auth';

import products from './shoppingReducer';
import cart from './cartReducer';
import results from './resultReducers';
import invoiceInfo from './invoiceReducer';

const appReducer = combineReducers({
    auth,
    products,
    results,
    productInfo,
    cart,
    invoiceInfo

})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }

    return appReducer(state, action);
}

export default rootReducer;