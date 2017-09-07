import expect from "expect";
import * as types from '../actions/type';
import * as cartActions from './cartActions'; 


    describe("Cart Actions : ", () => {

            describe("When AddToCart Action/function is called", () => { 

                it("It Should return action (an object) with properties and values type:ADD_TO_CART and cartgoods:[array of object(s)] respectively",() => {

                    const cartgoods = [
                        { id: 5,Name  :"Cucumber",Price : "7",Description : "1Kg Fresh Cucumber, Nice one!",Qty:0,isAdded:false,choice:"Add To Cart"},
                        
                        ]

                    const ActionExpectedToBeReturned = { type:types.ADD_TO_CART, cartgoods }

                    const action = cartActions.AddToCart(cartgoods);
                    expect(action).toEqual(ActionExpectedToBeReturned);
                    expect(action.cartgoods).toEqual(cartgoods);
                    
                })

                    

            });

            describe("When Updatecart Action/function is called", () => { 

                it("It Should return action (an object) with properties and values type:UPDATE_CART and newcart:[array of object(s)] respectively",() => {

                    const newcart = [
                        { id: 5,Name  :"Cucumber",Price : "7",Description : "1Kg Fresh Cucumber, Nice one!",Qty:0,isAdded:false,choice:"Add To Cart"},
                        
                        ]

                    const ActionExpectedToBeReturned = { type:types.UPDATE_CART, newcart  }

                    const action = cartActions.UpdateCart(newcart );
                    expect(action).toEqual(ActionExpectedToBeReturned);
                    expect(action.newcart).toEqual(newcart);
                    
                });
            });
            describe("When removeFromCart Action/function is called", () => { 

                it("It Should return action (an object) with properties and values type:REMOVE_FROM_CART and goodId:(integer) respectively",() => {

                    const goodId = 10;

                    const ActionExpectedToBeReturned = { type:types.REMOVE_FROM_CART, goodId  }

                    const action = cartActions.removeFromCart(goodId);
                    expect(action).toEqual(ActionExpectedToBeReturned);
                    expect(action.goodId).toBe(10);
                    
                })

                    

            })



    });