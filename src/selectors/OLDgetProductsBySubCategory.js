import { products } from '../data/products';

export const getProductsBySubCategory = ( subcategory ) => {

    const validSubCategory = ['Panaderia', 'Cafeteria', 'Promociones', 'Tapas'];

    if ( !validSubCategory.includes( subcategory ) ) {
        throw new Error(`Subcategoria "${ subcategory }" no es correcto`);
    }

    return products.filter( product => product.subcategory === subcategory );

}
