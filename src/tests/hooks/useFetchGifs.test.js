import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('tests on the hook useFetchGifs', () => {

    test('should return the initial state', async () => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Nintendo'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });


    test('should return an array of images and loading: false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Nintendo'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });



})
