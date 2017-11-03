import React, {PropTypes} from 'react';
import axios from 'axios';
import * as types from './type';

export function createCartSuccess(product) {
    return { type: types.CREATE_CART_SUCCESS, product};
}

export function deleteCartSuccess(product) {
    return { type: types.DELETE_CART_SUCCESS, product};
}

export function  AddToCart(cartgoods) {
    return { type: types.ADD_TO_CART, cartgoods};
}
export function  UpdateCart(newcart) {
    return { type: types.UPDATE_CART, newcart};
}
export function removeFromCart(goodId) {
    return {type: types.REMOVE_FROM_CART, goodId};
}