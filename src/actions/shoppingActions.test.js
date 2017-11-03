import expect from "expect";
import * as types from '../actions/type';
import * as cartActions from './shoppingActions'; 



    describe("Shopping/Product Actions : ", () => {

            describe("When AddToGoods Action/function is called", () => { 

                it("It Should return action (an object) with properties and values type:ADD_TO_GOODS and newgood:{a single object} respectively",() => {

                    const newgood = { id: 5,Name  :"Cucumber",Price : "7",Description : "1Kg Fresh Cucumber, Nice one!",Qty:0,isAdded:false,choice:"Add To Cart"};
                        
                    

                    const ActionExpectedToBeReturned = { type:types.ADD_TO_GOODS, newgood }

                    const action = cartActions.addToGoods(newgood);
                    expect(action.newgood).toEqual(newgood );
                    
                });
            })

            describe("When UpdateProduct function is called", () => { 

                it("It Should return action (an object) with properties and values type:UPDATE_PRODUCTS and newproducts:[array of objects] respectively",() => {

                    const newproducts = [{ id: 5,Name  :"Cucumber",Price : "7",Description : "1Kg Fresh Cucumber, Nice one!",Qty:0,isAdded:false,choice:"Add To Cart"}];
                        
                    

                    const ActionExpectedToBeReturned = { type:types.UPDATE_PRODUCTS, newproducts }

                    const action = cartActions.UpdateProduct(newproducts) ;
                    expect(action).toEqual(ActionExpectedToBeReturned);
                     expect(action.newproducts).toEqual(newproducts);
                });


                    

            });

             describe("When updateDetails function is called", () => { 

                it("It Should return action (an object) with properties and values type:UPDATE_DETAILS and updatedgood:{a single Object} respectively",() => {

                    const updatedgood = [{ id: 5,Name  :"Cucumber",Price : "7",Description : "1Kg Fresh Cucumber, Nice one!",Qty:0,isAdded:false,choice:"Add To Cart"}];
                        
                    

                    const ActionExpectedToBeReturned = { type:types.UPDATE_DETAILS, updatedgood }

                    const action = cartActions.updateDetails(updatedgood) ;
                    expect(action).toEqual(ActionExpectedToBeReturned);
                    expect(action.updatedgood).toEqual(updatedgood);
                    
                });


                    

            });
            
            describe("When deleteproduct function is called", () => { 

                it("It Should return action (an object) with properties and values type:DELETE_PRODUCT and productID:(an INTEGER) respectively",() => {

                    const productId = 7;
                        
                    

                    const ActionExpectedToBeReturned = { type:types.DELETE_PRODUCT,productId}

                    const action = cartActions.deleteproduct(productId) ;
                    expect(action).toEqual(ActionExpectedToBeReturned);
                    expect(action.productId).toBe(7);
                    
                });


                    

            });
            
            


    
    });