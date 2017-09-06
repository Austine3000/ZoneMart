import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import AddGoods from './components/addgoods/AddGoods';

import ManageProduct from './components/manageproduct/ManageProduct';
import ShopPage from './components/ShopPage/ShopPage';
import ProductList from './components/productlist/ProductList';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import InvoicePage from './components/invoice/InvoicePage';
import ProductDetails from './components/productdetails/productDetails';

export default (
    <Route path="/" component={App}>
        <IndexRoute  component={ShopPage}/>  
         <Route path="/Addgoods" component={AddGoods}/>    
         <Route path="/ProductList" component={ProductList}/> 
         <Route path="/ManageProduct/:id" component={ManageProduct}/> 
        <Route path="/Cart" component={Cart}/>  
        <Route path="/Checkout" component={Checkout}/>  
        <Route path="/InvoicePage" component={InvoicePage}/>  
        <Route path="/details/:id" component={ProductDetails}/>  
    </Route>
);