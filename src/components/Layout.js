import React from 'react'
import MenuPrincipal from './MenuPrincipal'
import PiedDePage from './PiedDePage'

export default function Layout({children}) {
    
    return (
        <div className="layout">
           <MenuPrincipal />

           {children}

           <PiedDePage />
            
        </div>
    )
}
