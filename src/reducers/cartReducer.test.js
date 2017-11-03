import expect from "expect";
import shoppingReducer from "./shoppingReducer";
import * as actions from "../actions/shoppingActions";

describe("Cart Reducer", () => {

    it("it should add a new good to the list of goods when passed ADD_TO_GOODS type", () => { 

        const initial_State = [
            { id : 1, Name :"Banana",Price : "24", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"},
            { id : 2, Name :"Pineapple",Price : "23", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"},
            { id : 3, Name :"Lemon",Price : "90", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"}
        ];

        const newGood = { id :4 , Name :"Orange",Price : "45", Description : "50Kg Fresh Pineapple",Qty:0,isAdded:false,choice:"Add To Cart"};

        const action = actions.addToGoods(newGood);

        const newState = shoppingReducer(initial_State, action);

        expect(newState.length).toEqual(4);
        expect(newState[3].Name).toEqual("Orange");

    });

    it("it should replace the product with outdated details with the updated ones and sort the entire Array of Products to make the new products array when UPDATE_DETAILS is passed", () => { 

        const initial_State = [
            { id : 1, Name :"Banana",Price : "24", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"},
            { id : 2, Name :"Pineapple",Price : "23", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"},
            { id : 3, Name :"Lemon",Price : "90", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"}
        ];

        const newGood = { id :3 , Name :"Cucumber",Price : "45", Description : "50Kg Fresh Pineapple",Qty:0,isAdded:false,choice:"Add To Cart"};

        const action = actions.updateDetails(newGood);

        const newState = shoppingReducer(initial_State, action);

        expect(newState.length).toEqual(3);
        expect(newState[2].Name).toEqual("Cucumber");


    });
    
    it("it should replace the  outdated Array of Products Qty with the new products array in ascending order when UPDATE_PRODUCTS is passed", () => { 

    const initial_State = [
        { id : 1, Name :"Banana",Price : "24", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"},
        { id : 2, Name :"Pineapple",Price : "23", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"},
        { id : 3, Name :"Lemon",Price : "90", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"}
    ];

    const newProducts  = [
        { id : 1, Name :"Guava",Price : "24", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"},
        { id : 2, Name :"Potato",Price : "23", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"},
        
    ];

    const action = actions.UpdateProduct(newProducts);

    const newState = shoppingReducer(initial_State, action);

    expect(newState.length).toEqual(2);
    expect(newState[1].Name).toEqual("Potato");
       
    });

    it("it should delete  Product from stock based on the id of  product provided when DELETE_PRODUCT is passed", () => { 

    const initial_State = [
        { id : 1, Name :"Banana",Price : "24", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"},
        { id : 2, Name :"Pineapple",Price : "23", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"},
        { id : 3, Name :"Lemon",Price : "90", Description : "50Kg Fresh Pineapple, ",Qty:0,isAdded:false,choice:"Add To Cart"}
    ];

    const product_Id  = 2;

    const action = actions.deleteproduct(product_Id);

    const newState = shoppingReducer(initial_State, action);

    expect(newState.length).toEqual(2);
    expect(action.productId).toEqual(2);
   
       
    });







})
