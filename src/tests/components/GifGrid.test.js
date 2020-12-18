import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { GifGrid } from "../../compontents/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('tests on <GifGrid />', () => {

    const category = 'Nintendo';

    test('should to show component correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();


    });

    test('should to show items when images are charged useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/anything/a.jpg',
            title: 'Random thing'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    });


})
