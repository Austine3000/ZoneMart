import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Products from './Products';

function setup() {
    const props = {
        ProductList: {},
        SaveCartInfo: () => {} 
    };

    return shallow(<Products {...props} />);
}

describe('Products via Enzyme', () => {
    it('renders div', () => {
        const wrapper = setup(false);
        //expect(wrapper.find('section').length).toBe(1);
        //expect(wrapper.find('div').text()).toEqual(div);    
    });
})
