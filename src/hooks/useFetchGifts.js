import React, { useEffect, useState } from 'react'
import { getGits } from '../helpers/getGifs';

export const useFetchGifts = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async () => {
        const newImages = await getGits(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
        // getGits(category)
        //     .then(newImages => setImages(newImages));


    }, []);

    return {
        images,
        isLoading
    }


}
