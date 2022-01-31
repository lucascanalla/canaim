import { useState, useEffect } from 'react'
import  TabProduct  from './TabProduct'
import { 
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink } from 'reactstrap'
import { getCategories } from '../../../selectors/getCategories'


const TabFormat = () => {

  const [active, setActive] = useState('Cafeteria');
  const [category, setCategory] = useState('Cafeteria');
  const [categoryIdCafeteria, setCategoryIdCafeteria] = useState(null);
  const [categoryIdTapeo, setCategoryIdTapeo] = useState();
  const [categoryIdBebidas, setCategoryIdBebidas] = useState();
  const [categoryIdVinos, setCategoryIdVinos] = useState();
  const [categoryIdAlmuerzos, setCategoryIdAlmuerzos] = useState();

  const toggle = (e, tab) => {
    if (active !== tab) {
      setActive(tab)
      setCategory(tab)
    }
  }

  useEffect(() => {
    getCategories()
    .then(res => 
                res.categorys.map(function(category){
                  if(category.name === 'Cafeteria'){
                    setCategoryIdCafeteria(category._id);
                  }else if(category.name === 'Tapeo'){
                    setCategoryIdTapeo(category._id);
                  }else if(category.name === 'Bebidas'){
                    setCategoryIdBebidas(category._id);
                  }else if(category.name === 'Vinos por Copa'){
                    setCategoryIdVinos(category._id);
                  }else if(category.name === 'Mediodia'){
                    setCategoryIdAlmuerzos(category._id);
                  }
                })

          )
  }, [])

  return (
    <div className='nav-vertical'>
      <Nav tabs className='nav-left'>

        <NavItem>
          <NavLink
            active={active === 'Cafeteria'}
            onClick={ (e) => {toggle(e,'Cafeteria')} }
          >
            Cafeteria
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={active === 'Almuerzos'}
            onClick={ (e) => {toggle(e,'Almuerzos')} }
          >
          Almuerzos
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={active === 'Tapeo'}
            onClick={ (e) => {toggle(e,'Tapeo')} }
          >
          Tapeo
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={active === 'Bebidas'}
            onClick={ (e) => {toggle(e, 'Bebidas')}}
          >
            Bebidas
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={active === 'Vinos por Copa'}
            onClick={ (e) => {toggle(e, 'Vinos por Copa')}}
          >
            Vinos por Copa
          </NavLink>
        </NavItem>
      </Nav>
      
        <TabContent activeTab={category}>
          <TabPane tabId='Cafeteria'>
            { (active === 'Cafeteria' && categoryIdCafeteria != null)
              ?
                <TabProduct category={ categoryIdCafeteria } />
              :
                <h1></h1>
            }
          </TabPane>
          <TabPane tabId='Almuerzos'>
            { (active === 'Almuerzos' && categoryIdAlmuerzos != null)
              ?
                <TabProduct category={ categoryIdAlmuerzos } />
              :
                <h1></h1>
            }
          </TabPane>
          <TabPane tabId='Tapeo'>
            {active === 'Tapeo'
              ?
                <TabProduct category={ categoryIdTapeo } />              
              :
                <h1></h1>
            }
          </TabPane>
          <TabPane tabId='Bebidas'>
            {active === 'Bebidas' 
              ?
                <TabProduct category={ categoryIdBebidas } />
              :
                <h1></h1>
            }
          </TabPane>
          <TabPane tabId='Vinos por Copa'>
            {active === 'Vinos por Copa' 
              ?
                <TabProduct category={ categoryIdVinos } />
              :
                <h1></h1>
            }
          </TabPane>
        </TabContent>
      
    </div>
  )
}
export default TabFormat
