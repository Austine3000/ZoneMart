import * as types from '../actions/type';

export default function resultReducer(state = [], action) {
    switch (action.type) {
        
        case types.RECORD_RESULT:
            return [...action.results];
          
        default:
            return state;
    }
}