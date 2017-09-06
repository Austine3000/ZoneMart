import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import ShopPage from './components/ShopPage/ShopPage';
import Cart from './components/cart/Cart';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ShopPage} />    
        <Route path="/Cart" component={Cart}/>    
    </Route>
);

