
import { Dashboard, ShoppingBasket, LocalTaxi, Gradient } from '@material-ui/icons'
import React from 'react'
import "./sidebar.css"

 function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidbarWrapper">
                <div className="sidebarMenu">
            <img className="logo" src="/image/logo.png" alt=""/>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Dashboard className="sidebarListItemIcon"/>
                            <span className="sidebarListItemList">Dashboard</span> 
                        </li>

                        <li className="sidebarListItem">
                            <Dashboard className="sidebarListItemIcon" />
                            <span className="sidebarListItemList">Starships</span>    
                        </li>

                        <li className="sidebarListItem">
                            <ShoppingBasket className="sidebarListItemIcon"/>
                            <span className="sidebarListItemList">People</span> 
                        </li>

                        <li className="sidebarListItem">
                            <LocalTaxi className="sidebarListItemIcon" />
                            <span className="sidebarListItemList">Vehicles</span> 
                        </li>

                        <li className="sidebarListItem">
                            <Gradient className="sidebarListItemIcon" />
                            <span className="sidebarListItemList">Species</span> 

                            
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    )
 }

 export default Sidebar
