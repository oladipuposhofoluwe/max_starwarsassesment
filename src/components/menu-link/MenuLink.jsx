import React from "react";
import "./menu-link.css";
import { Link } from 'react-router-dom';

export const MenuLink = ({text, icon, link}) => {
  return (
    <Link to={link} className="sidebar__menu-item">
      <div className="menu-icon">
        <object
          data={icon}
          className="sidebar_list-item-icon"
          type="image/svg+xml"
        >
          icon
        </object>
      </div>
          <div className="menu-text">{text}</div>
    </Link>
  );
};
