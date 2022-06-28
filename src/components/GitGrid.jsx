import { useEffect, useState } from "react";
// import { getGits } from "../helpers/getGifs.js";
import { useFetchGifts } from "../hooks/useFetchGifts.js";
import { GifItem } from "./GifItem.jsx";

export const GitGrid = ({ category }) => {

const {images, isLoading} = useFetchGifts(category);

console.log({images, isLoading});






    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>cargando...</h2> ) 
            }
            

            <div className="card-grid">
                {
                   images.map( (image) => (
                   <GifItem key={image.id}
                  {...image}
                   />
                   )) 
                    
                   }               
            </div>


        </>
    )
}
