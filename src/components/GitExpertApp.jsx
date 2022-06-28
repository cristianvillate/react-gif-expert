import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GitGrid } from "./GitGrid";
export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        // categories.push(newCategory);
        //console.log('Dota 2');
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [newCategory,...cat]);

    }

    return (
        <>

            <h1>GitExpertApp</h1>


            <AddCategory

                onNewCategory={(event) => onAddCategory(event)}
            />



            {categories.map((category) =>
            (
                <GitGrid key={category} category={category} />
            )
            )}



        </>

    )

}