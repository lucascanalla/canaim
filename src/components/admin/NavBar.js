import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';


export const NavBar = () => {

    const dispatch = useDispatch();


	const handleButton = (e)=>{
		e.preventDefault();
		dispatch( startLogout());
	}

	return (
		<div className="navbar nabvar-dark bg-dark mb-4" >
			<span className="navbar-brand">
				Categorias
			</span>
			<button className="btn btn-outline-danger"
			onClick={ handleButton }>
				<span>Salir</span>
			</button>
		</div>
		/*<div className="topnav" id="myTopnav">
			<NavLink activeClassName="active" className="nav-active" exact to="/categories">
                Categorias
            </NavLink>
            <NavLink activeClassName="active" className="nav-active" exact to="/admin/subcategories">
                Subcategorias
            </NavLink>
            <NavLink activeClassName="active" className="nav-active" exact to="admin/productos">
                Productos
            </NavLi<div className="navbar nabvar-dark bg-dark mb-4" >
				
		</div>nk>*/
			/*<a href="/main" className="nav-active">Home</a>
			<a href="/categories">Categorias</a>
		  	<a href="/subcategories">Subcategorias</a>
			<a href="/products">Productos</a>*/
		  	/*<div className="dropdown">
		    	<button className="dropbtn">Dropdown 
		      		<i className="fa fa-caret-down"></i>
		    	</button>
			    <div className="dropdown-content">
			    	<a href="#">Link 1</a>
			      	<a href="#">Link 2</a>
			      	<a href="#">Link 3</a>
			    </div>
		  	</div> */
		/*</div>*/
	)
}

