import React, {PropTypes} from 'react';
import axios from 'axios';
import * as types from './type';

export function createCheckout(productInfo) {
    return { type: types.CREATE_CHECKOUT_SUCCESS, productInfo};
}
