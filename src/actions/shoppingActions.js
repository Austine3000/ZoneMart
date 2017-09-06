import * as types from './type';


export function UpdateProduct(newproducts) {
    return { type: types.UPDATE_PRODUCTS, newproducts};
}
export function addToGoods(newgood) {
    return { type: types.ADD_TO_GOODS, newgood};
}
export function updateDetails(updatedgood) { //for Edit suppose to be in ADMIN ACTIONS
    return { type: types.UPDATE_DETAILS, updatedgood};
}
export function deleteproduct(productId) {
    return { type: types.DELETE_PRODUCT, productId};
}