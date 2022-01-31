import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const MenuHeader = () => {
	return (
		<div className="card mt-3 mb-3">
			<div className="d-flex justify-content-around menu-header-set">
			    <div className="column"> 
			        <img src="./canaimalogo100.png" alt="Canaima"/>
				</div>			
			    <div className="column"> 
			        <h1 className="menu-h1-set">Menu</h1>
			    </div>
			    <div className="column"> 
					<a className="a-insta-set" href="https://www.instagram.com/canaimaespaciodesabores/" target="_blank">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a className="a-insta-set" href="https://www.facebook.com/canaimasabores/" target="_blank">
						<FontAwesomeIcon  icon={faFacebook} />
					</a>
				</div>
			</div>
		</div>
	)
}

export default MenuHeader