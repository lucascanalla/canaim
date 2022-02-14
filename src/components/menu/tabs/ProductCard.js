import React, { useState, useEffect } from 'react'
import { UncontrolledTooltip } from 'reactstrap';
import { getProductsBySubCategory } from '../../../selectors/getProductsBySubCategory'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'


const ProductCard = ({subcategory}) => {

	const [productsArray, setProductsArray] = useState(null)
	/*const products = useMemo( 
			() => getProductsBySubCategory (subcategory).then(res=> setProductsArray(res.products)) );
	*/

	useEffect(() => {
		//console.log('asd');
		const products = getProductsBySubCategory (subcategory).then(res=> setProductsArray(res.products));
	}, [])
	
	return (
		<>
			<div className="animate__animated animate__bounceIn">
				{	productsArray != null
					?
						productsArray.map( product => (
							<ul className="prod-ul-set" key={product._id} >
								<div className="d-flex justify-content-between">
									<div className="prod-div-set p-2">
										{product.name}
										{
										product.recommended && product._id != null
										?
										(<span id="spanRecommendedId" className="span-recom-set">
			                            	<FontAwesomeIcon icon={faStar} />
			                            	<UncontrolledTooltip placement="right"  target="spanRecommendedId">
									    		Recomendado!
									    	</UncontrolledTooltip>
			                            </span>)
			                            : <></>
										}

										{
										product.new && product._id != null
										?
										(<span id="spanNewId" className="span-recom-set">
			                            	<FontAwesomeIcon icon={faBullhorn} />
			                            	<UncontrolledTooltip placement="right"  target="spanNewId">
									    		Nuevo!
									    	</UncontrolledTooltip>
			                            </span>)
			                            : <></>
										}
									</div>
									<div className="p-2">
										${product.price}
									</div>
								</div>
							</ul>
							)
						)
					:
					<h5 className="h5-custom">Cargando...</h5>
				}
			</div>
		</>
	)
}

export default ProductCard