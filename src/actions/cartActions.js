import React, {PropTypes} from 'react';
import axios from 'axios';
import * as types from './type';

export function createCartSuccess(product) {
    return { type: types.CREATE_CART_SUCCESS, product};
}

export function deleteCartSuccess(product) {
    return { type: types.DELETE_CART_SUCCESS, product};
}