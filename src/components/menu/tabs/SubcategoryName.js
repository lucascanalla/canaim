import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBreadSlice , faCannabis , 
		faUtensils, faCarrot, faAppleAlt, 
		faBlender, faWineGlassAlt, faTint,
		faWineBottle, faMortarPestle, 
		faCheese, faDrumstickBite} from '@fortawesome/free-solid-svg-icons'

const SubcategoryName = ({subcategoryName}) => {

	const [iconFa, setIconFa] = useState(faCoffee);

	useEffect(() => {
		//console.log(key);
		switch (subcategoryName){
			case "Cafeteria":
				setIconFa(faCoffee);
				break;
			case "Panaderia":
				setIconFa(faBreadSlice);
				break;
			case "Promociones":
				setIconFa(faCannabis);
				break;
			case "Sandwiches":
				setIconFa(faUtensils);
				break;
			case "Tapas":
				setIconFa(faUtensils);
				break;
			case "Vegan":
				setIconFa(faCarrot);
				break;
			case "Saludables":
				setIconFa(faAppleAlt);
				break;
			case "Jugos Naturales":
				setIconFa(faBlender);
				break;
			case "Menu Mediodia":
				setIconFa(faUtensils);
				break;
			case "Aguas":
				setIconFa(faTint);
				break;
			case "Gaseosas":
				setIconFa(faWineBottle);
				break;
			case "Montaditos":
				setIconFa(faDrumstickBite);
				break;
			case "Croquetas Pinchos y Platitos":
				setIconFa(faMortarPestle);
				break;
			case "Tablas Frias":
				setIconFa(faCheese);
				break;
			case "Vino Tinto":
				setIconFa(faWineGlassAlt);
				break;
			case "Vino Blanco":
				setIconFa(faWineGlassAlt);
				break;
			case "Vino Rosado":
				setIconFa(faWineGlassAlt);
				break;
			default:
				setIconFa(faCoffee);
				break;
		}
		//console.log(iconFa)
	}, [subcategoryName])
	
	return (
		<>
			<div className="tab-div-set d-flex card-title">
    			<i className="fa-set"><FontAwesomeIcon icon={iconFa} /> </i>
    			<h3 className="tab-h3-set ml-3">{subcategoryName}</h3>
    		</div>
    		<hr className="solid"></hr>
		</>
	)
}

export default SubcategoryName