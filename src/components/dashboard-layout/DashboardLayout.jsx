import React from "react";
import DateFactor from "../date/datefactor";
import "./dashboard-layout.css";
import Sidebar from "../sidebar/Sidebar";
// import TopBar from '../topbar/Topbar';
// import SearchBar from "../searchbar/searchbar";


function DashboardLayout(props) {
  return (
      <div className="dashboard-layout">
            <Sidebar />
          <section className="dashboard-layout-body ">
              {/* <TopBar /> */}
        <DateFactor />
        {/* <SearchBar/> */}
                
        <div className="dashboard-children">{props.children}</div>
      </section>
    </div>
  );
}

export default DashboardLayout;
