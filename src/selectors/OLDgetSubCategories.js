import { subcategories } from '../data/subcategories';

export const getSubCategories = ( category ) => {

    //console.log(category)
    const validCategories = ['Bar', 'Tapeo', 'Promociones'];

    if ( !validCategories.includes( category ) ) {
        throw new Error(`Categoria "${ category }" no es correcto`);
    }

    return subcategories.filter( subcategory => subcategory.category === category );

}
