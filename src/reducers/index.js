import {combineReducers} from 'redux';

import products from './shoppingReducer';
import cart from './cartReducer';
import invoiceInfo from './invoiceReducer';

const rootReducer = combineReducers({
    
    products,
    cart,
    invoiceInfo
})

export default rootReducer;