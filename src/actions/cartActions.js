
import * as types from './type';


export function  AddToCart(cartgoods) {
    return { type: types.ADD_TO_CART, cartgoods};
}

export function  UpdateCart(newcart) {
    return { type: types.UPDATE_CART, newcart};
}

export function removeFromCart(goodId) {
    return {type: types.REMOVE_FROM_CART, goodId};
}






// export function  AddToCart(usercart) {
//     return { type: types.ADD_TO_CART, usercart};
// }

// export function RemoveFromCart(cartgoodId) {
//     return {type: types.REMOVE_FROM_CART, cartgoodId};
// }