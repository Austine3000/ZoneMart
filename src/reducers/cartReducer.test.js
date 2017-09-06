import expect from 'expect'
import cartReducer from './cartReducer';
import * as actions from '../actions/cartActions';

describe('Cart Reducer', () => {
    it('should add item to cart when passed CREATE_CART_SUCCESS', () => {
        //arrange
        const initialState = [
            {name: 'A'},
            {name: 'B'}
        ];

        const newCart = {name: 'C'}

        const action = actions.createCartSuccess(newCart);

        //act
        const newState = cartReducer(initialState, action);

        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].name).toEqual('A');
        expect(newState[1].name).toEqual('B');
        expect(newState[2].name).toEqual('C');
    });

    it('should update cart when passed UPDATE_CART_SUCCESS', () => {
        //arrange
        const initialState = [
            {id: 'A', name: 'A'},
            {id: 'B', name: 'B'},
            {id: 'C', name: 'C'}
        ];

        const cart = { id: 'B', name: 'New Title' };
        const action = actions.deleteCartSuccess(cart);

        //act
        const newState = cartReducer(initialState, action);
        const updatedCourse = newState.find(a => a.id == cart.id);
        const untouchedCourse = newState.find(a => a.id == 'A');

        //assert
        expect(updatedCart.title).toEqual('New Title');
        expect(untouchedCart.title).toEqual('A');
        expect(newState.length).toEqual(3);
    })
});

