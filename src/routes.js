import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import ShopPage from './components/ShopPage/ShopPage';
import SignUpPage from './components/signup/SignUpPage';
import LoginPage from './components/login/LoginPage';
import Cart from './components/cart/Cart';
import Checkout from './components/cart/checkout';
import requireAuth from './utils/requireAuth';
import productInfoDisplay from './components/cart/productInfoDisplay';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ShopPage} />
        <Route path="/SignUp" component={SignUpPage}/>
        <Route path="/Login" component={LoginPage} /> 
        <Route path="/Cart" component={Cart}/>   
        <Route path="/Checkout" component={requireAuth(Checkout)} />
        <Route path="/productInfoDisplay" component={requireAuth(productInfoDisplay)} />   
    </Route>
);

