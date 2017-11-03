import expect from "expect";
import * as types from '../actions/type';
import * as invoiceActions from './invoiceActions'; 


    describe("INVOICE Actions : ", () => {

            describe("When invoiceDetails Action/function is called", () => { 

                it("It Should return action (an object) with properties and values type:INVOICE_DETAILS and cartgoods:[array of object(s)] respectively",() => {

                    const details = {name:"",phone:"",paymode:"",address:"" };
                        
                        

                    const ActionExpectedToBeReturned = { type:types.INVOICE_DETAILS, details };

                    const action = invoiceActions.invoiceDetails(details);
                    expect(action).toEqual(ActionExpectedToBeReturned);
                    
                })

                    

            });

            


    });