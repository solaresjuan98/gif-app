import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from '../../compontents/AddCategory'


describe('test on <AddCategory /> component', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    //
    beforeEach(() => {
        jest.clearAllMocks();//clear simulations
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should to show correctly', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should change textbox', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {
            target: {
                value: value
            }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);

    });


    test('should not post the info with submit', () => {

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });

        expect(setCategories).not.toHaveBeenCalled();
    });


    test('should call setCategories and clear textbox', () => {

        const value = 'Hola';

        wrapper.find('input').simulate('change', {
            target: { value }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    });


});
