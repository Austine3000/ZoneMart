import * as types from '../actions/type';
//var ProductList= require('!json!../products.json'); 
import ProductList from '../assets/product';
let Initialstate = ProductList;
export default function shoppingReducer(state=Initialstate, action) {
    switch (action.type) {
            case types.UPDATE_PRODUCTS:                         // when adding Qty
                state = [
                ...action.newproducts
                ];
                return state;
            case types.ADD_TO_GOODS:
                return [
                ...state,
                Object.assign({}, action.newgood)
            ];
            case types.UPDATE_DETAILS:                                                      // for the admin part like price decsriptiion...etc
                const  mstate = [
                ...state.filter(product => product.id != action.updatedgood.id),
                    Object.assign({}, action.updatedgood)
                ];
                mstate.sort(function(a, b) {
                    
                    return (a.id - b.id);
                });
                state = Object.assign([],mstate);
                return state;
            case types.DELETE_PRODUCT:
                const mutatedState = Object.assign([], state);
                const indexOfproductToDelete = mutatedState.findIndex( product => { 
                        return product.id == action.productId;
                        })
                mutatedState.splice(indexOfproductToDelete, 1);
                console.log(mutatedState);
                state = Object.assign([], mutatedState);
                console.log(state);
                return state;
        
                
            default:
                return state;
    }
}