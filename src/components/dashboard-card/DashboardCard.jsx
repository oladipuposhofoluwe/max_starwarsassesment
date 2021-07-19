import React from "react";
import "./dashboard-card.css";

export const DashboardCard = ({ title, icon, bgColor }) => {
  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__header-title">{title}</h3>
        <div
          className="card__header-icon"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <img src={icon} alt="card icon" />
        </div>
      </div>
      <div className="card__footer">
        <h2 className="card__footer-rate">200</h2>
        <p className="card__footer-text">
          <span style={{ color: `${bgColor}` }}>&uarr;20 </span>
          <span className="card__footer-text-content">
            More than Yesterday
          </span>
        </p>
      </div>
    </div>
  );
};
