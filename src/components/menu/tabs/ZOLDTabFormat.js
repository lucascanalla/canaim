import { useState, useEffect, useMemo } from 'react'
import  TabProduct  from './TabProduct'
import { 
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink } from 'reactstrap'
import { getCategories } from '../../../selectors/getCategories'


const TabFormat = () => {

  const [active, setActive] = useState('Bar');
  const [category, setCategory] = useState('Bar');

  const toggle = (e, tab) => {
    if (active !== tab) {
      setActive(tab)
      setCategory(tab)
    }
  }

  useEffect(() => {
    const  nameCategories  = getCategories();
    console.log(nameCategories);
    nameCategories.map(){function (category){
      category.
    }}
  }, [])

  return (
    <div className='nav-vertical'>
      <Nav tabs className='nav-left'>
        <NavItem>
          <NavLink
            active={active === 'Bar'}
            onClick={ (e) => {toggle(e,'Bar')} }
          >
            Bar
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
            active={active === 'Promociones'}
            onClick={ (e) => {toggle(e, 'Promociones')}}
          >
            Promociones
          </NavLink>
        </NavItem>
      </Nav>

      { nameCategories.map(function (category){
        

        <TabContent activeTab={category}>
          <TabPane tabId='Bar'>
            {active === 'Bar' 
              ?
                <TabProduct category={category} />
              :
                <h1></h1>
            }
          </TabPane>
          <TabPane tabId='Tapeo'>
            {active === 'Tapeo' 
              ?
                <TabProduct category={category} />              
              :
                <h1></h1>
            }
            
          </TabPane>
          <TabPane tabId='Promociones'>
            {active === 'Promociones' 
              ?
                <TabProduct category={category} />
              :
                <h1></h1>
            }
            <p>
              Icing croissant powder jelly bonbon cake marzipan fruitcake. Tootsie roll marzipan tart marshmallow pastry
              cupcake chupa chups cookie. Fruitcake dessert lollipop pudding jelly. Cookie dragée jujubes croissant lemon
              drops cotton candy. Carrot cake candy canes powder donut toffee cookie.
            </p>
          </TabPane>
        </TabContent>
      })
      }
    </div>
  )
}
export default TabFormat
