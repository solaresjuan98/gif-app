import { getGifs } from "../../helpers/getGifs"

describe('tests with getGifs fetch', () => {
    
    test('should Should to return 10 items', async () => {
        
        const gifs = await getGifs('Nintendo');
        expect(gifs.length).toBe(10);
        
    
    });

    
})
