import React, { useState } from 'react'
import { AddCategory } from './compontents/AddCategory';
import { GifGrid } from './compontents/GifGrid';

export const GifExpertApp = () => {

    /* const catergories = ['Nintendo', 'Xbox', 'PlayStation'];// one punch, samurai x, dragon ball */
    const [categories, setCategories] = useState(['Nintendo']);

    /*     const handleAdd = () => {
    
            //setCategories([...categories, 'Phillips']);
            setCategories(categories => [...categories, 'Phillips']);
        } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <br />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
