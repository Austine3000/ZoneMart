import {combineReducers} from 'redux';
import products from './cartReducer';
import * as types from '../actions/type';

const appReducer = combineReducers({
    products
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;