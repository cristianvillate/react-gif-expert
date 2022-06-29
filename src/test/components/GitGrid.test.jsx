import { render, screen } from "@testing-library/react";
import { GitGrid } from "../../components/GitGrid";
import { useFetchGifts } from "../../hooks/useFetchGifts";

jest.mock('../../hooks/useFetchGifts');


describe('probando el  GitGrid', () => {

    const category = 'One Punch';

test('debe de mostrar el loading inicialmente', () => { 
    
useFetchGifts.mockReturnValue({
    images: [],
    isLoading: true,
})

   render(<GitGrid category={category}/>);
   

   expect(screen.getByText('cargando...'));
   expect(screen.getByText(category));
   
   
 });

 test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

const gift = [{
    id:'ABC',
    title: 'Saitama',
    url: 'https://localhost/saitama.jpg'
},{
    id:'123',
    title: 'Goku',
    url: 'https://localhost/goku.jpg'
},
]

    useFetchGifts.mockReturnValue({
        images: gift,
        isLoading: true,
    })

    render(<GitGrid category={category}/>);
    
    expect( screen.getAllByRole('img').length).toBe(2);

   

  })

 })