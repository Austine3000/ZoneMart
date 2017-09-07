import expect from "expect";
import React from "react";
import {mount,shallow} from "enzyme";
import TestUtils from "react-addons-test-utils";
import Products from "./Products";
// import sinon from "sinon";

function SetUp(products){

    const props = {
        showDetails:()=>{},
        products:products,
        onAdded:()=>{}
    }

    return shallow(<Products showDetails={props.showDetails} onAdded={props.onAdded} products={props.products} />)
}
 //wrapper.props().bar.products;

describe("When Product Page is Rendered", () => {

    it("Number of product(s) displayed should be equal to the length of products array", () => {
            const products =[{id:1,isAdded:true,choice:"Remove"},{id:2,isAdded:false,choice:"Add To Cart"}];
            const wrapper = SetUp(products);
            const divNumber= wrapper.instance().props.products;
        expect (wrapper.find('.thumbnail').length).toBe(divNumber.length);

    });

    
    // it("Amount of each product must be the product of each Qty and its respective price", () => {
    //         const products =[{id:1,isAdded:true},{id:2,isAdded:false}];
    //         const wrapper = SetUp(products);
            
    //         const productAdded=wrapper.instance().props.products.find(product=>product.isAdded == true )
            

    //     expect (wrapper.find('button').props().text()).toBe(productAdded.isAdded);

    // })

    // describe("When Product Page is Rendered", () => {
    //     it('simulates click events', () => {
    //         const onButtonClick = sinon.spy();
    //         const wrapper = shallow(
    //         <Foo onButtonClick={onButtonClick} />
    //     );
    //     wrapper.find('button').simulate('click');
    //     expect(onButtonClick).to.have.property('callCount', 1);
    //     });
    // });
})