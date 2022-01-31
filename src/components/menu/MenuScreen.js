import React from 'react'
import TabFormat from './tabs/TabFormat'
import Footer from './Footer'
import MenuHeader from './MenuHeader'
import '../../styles/main.css'

export const MenuScreen = () => {

    return (
        <div className="container">
            <MenuHeader/>
            <TabFormat/>
            <Footer/>
        </div>
    )
}
