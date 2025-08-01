import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; //NO HACE FALTA COLOCAR /index

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        
        if( categories.includes(newCategory) ){
            return;
        }

        setCategories([...categories, newCategory]);
        //O EN PRIMERA POSICION
        //setCategories([ 'Valorant', ...categories]);

        //OTRA FORMA
        //setCategories( cat => [...cat, 'Valorant']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={ onAddCategory }/>  {/*LE PASO LA FUNCION*/}

            { categories.map( ( category ) => (
                <GifGrid key={ category } category={ category }/>
            ))}
        </>
    )
}