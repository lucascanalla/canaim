import React, { useEffect, useState } from 'react'

import { getSubCategories } from '../../../selectors/getSubCategories'
import ProductCard from './ProductCard'
import SubcategoryName from './SubcategoryName'

const TabProduct = ({ category }) => {

	const [subcatArray, setSubcatArray] = useState(null);

	useEffect(() => {
		const subcategories = getSubCategories (category).then(res=> setSubcatArray(res.subcategorys));
	}, [])

	return (
		<div className="card-columns animate__animated animate__fadeIn">           
            {
            	subcatArray != null
            	?
				subcatArray.map(function(subcategory){ 
	            	return(
	            	<div className="tab-row-set">
		            	<div className="card mt-3 card-div">
		            		<SubcategoryName
		            			subcategoryName = {subcategory.name}
		                    	key = { subcategory._id }
		            		/>
		                    <ProductCard 
		               			subcategory = {subcategory._id}
		                	/>
			            </div>
	            	</div>
	            	);
	            })
	            :
	          	<h3 className="h5-custom">Espere..</h3>
			}
        </div>
	)
}
export default TabProduct