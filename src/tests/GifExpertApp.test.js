import React from 'react';
import { shallow } from 'enzyme';
import {GifExpertApp} from '../GifExpertApp';

describe('tests on <GifExpertApp />', () => {
   
    
    test('should to show component correctly', () => {
        const wrapper = shallow(<GifExpertApp category={'Nintendo'} />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should show a category list', () => {
        
        const categories = ['Nintendo', 'PlayStation'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});
