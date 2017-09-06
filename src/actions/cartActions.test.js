import expect from 'expect';
import * as cartActions from './cartActions';
import * as types from './type.js';

//Test a sync action
describe('Cart Actions', () => {
    describe('createCartSuccess', () => {
        it('should create a CREATE_CART_SUCCESS action', () => {
            //arrange
            const product = { id: 'clean-code', name: "Clean Code"};
            const expectedAction = {
                type: types.CREATE_CART_SUCCESS,
                product: product
            };

            //act
            const action = cartActions.createCartSuccess(product);

            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});