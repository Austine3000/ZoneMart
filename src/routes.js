import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import ShopPage from './components/ShopPage/ShopPage';
import SignUpPage from './components/signup/SignUpPage';
import LoginPage from './components/login/LoginPage';
import Cart from './components/cart/Cart';
//import Checkout from './components/cart/checkout';
import requireAuth from './utils/requireAuth';
import productInfoDisplay from './components/cart/productInfoDisplay';

import AddGoods from './components/addgoods/AddGoods';

import ManageProduct from './components/manageproduct/ManageProduct';
import ProductList from './components/productlist/ProductList';
import Checkout from './components/checkout/Checkout';
import InvoicePage from './components/invoice/InvoicePage';
import ProductDetails from './components/productdetails/productDetails';
import Payment from './components/checkout/Payment'


export default (
    <Route path="/" component={App}>
        <IndexRoute component={ShopPage} />
        <Route path="/SignUp" component={SignUpPage}/>
        <Route path="/Login" component={LoginPage} /> 
        <Route path="/Cart" component={Cart}/>   
        <Route path="/Checkout" component={Checkout} />
        <Route path="/productInfoDisplay" component={productInfoDisplay} />   
        <Route path="/Addgoods" component={AddGoods}/>    
        <Route path="/ProductList" component={ProductList}/> 
        <Route path="/ManageProduct/:id" component={ManageProduct}/>
        <Route path="/InvoicePage" component={InvoicePage}/>  
        <Route path="/details/:id" component={ProductDetails}/>
        <Route path="/Payment" component={Payment}/>
    </Route>
);
