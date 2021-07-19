import React from "react";
import { MenuLink } from "../menu-link/MenuLink";
import "./sidebar.css";

function Sidebar() {
  const sidebarMenus = [
    { text: 'dashboard', icon: '', link:'/dashboard' },
    { text: 'starships', icon: '', link:'/starships' },
    { text: 'people', icon: '', link:'/people' },
    { text: 'vehicle', icon: '', link:'/vehicle' },
    { text: 'species', icon: '', link:'/species' },
  ];

  return (

      <div className="sidebar_wrapper">
        <div className="sidebar_menu">
          <img className="logo" src="/images/Star wars logo.png" alt="" />
          {
            sidebarMenus.map(({ text, icon, link }, index) => (
              <MenuLink text={text} icon={icon} key={index} link={link} />
              ))
          }
         </div>
      </div>
  );
}

export default Sidebar;
