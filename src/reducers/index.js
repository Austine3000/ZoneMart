import {combineReducers} from 'redux';
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

export default rootReducer;