import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('tests on the hook useFetchGifs', () => {
    
    test('should return the initial state', () => {
        
        //const { data, loading } = useFetchGifs('Nintendo');
        const {result} = renderHook(() => useFetchGifs('Nintendo'));
        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })
    

})
