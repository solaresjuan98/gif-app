import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../compontents/GifGridItem';

describe('Tests on <GifGridItem />', () => {


    const title = 'a title';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('should show the component correctly', () => {

        
        expect(wrapper).toMatchSnapshot();
    });


    test('should have a paragraph with title', () => {
        
        const paragraph = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    

    test('should have the same image equal to url and alt from props', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('should have animate__fadeIn', () => {
        
        const div = wrapper.find('div');

        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);

    });
    
    


})
