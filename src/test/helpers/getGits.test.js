import { getGits } from "../../helpers/getGifs"

describe('pruebas en getGits()', () => {

    test('debe retornar arreglo de gifs', async () => {
        const gif = await getGits('One Punch');
        expect(gif.length).toBeGreaterThan(0);
        expect(gif[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });

})