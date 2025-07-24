import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifsApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball', 'Demons Slayer']);

    const onAddCategory = (newCategory) => {
    
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    console.log(categories);

    return (
        <>
            <h1>GifsApp</h1>

                <AddCategory 
                    onNewCategory={value => onAddCategory(value)}
            />
            {categories.map( ( category ) => ( 
                <GifGrid 
                key={ category } 
                category={category}
                /> 
                    )
                )  
            }
            
        </>
)
}