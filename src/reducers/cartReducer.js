import * as types from '../actions/type';


let Initialstate = [];

export default function cartReducer(state=Initialstate, action) {
    switch (action.type) {

        case types.ADD_TO_CART:
             return Object.assign([],action.cartgoods);
        
         case types.UPDATE_CART:
             return Object.assign([],action.newcart);
            

        case types.REMOVE_FROM_CART:
                   return [... state.filter(good=>good.id != action.goodId)]
             
        
        default:
            return state;
    }
}




// export default function cartReducer(state=Initialstate, action) {
//     switch (action.type) {

//         case types.ADD_TO_CART:
//              return [
//                ...action.usercart
//             ];

//         case types.REMOVE_FROM_CART:

//             const mutatedState = Object.assign([], state);
//                 const indexOfgoodToDelete = mutatedState.findIndex( good => { 
//                         return good.id == action.cartgoodId;
//                         })
//                 mutatedState.splice(indexOfgoodToDelete, 1);

//                 state = Object.assign([], mutatedState);
                 
//                 return state;
               
        
//         default:
//             return state;
//     }
// }
