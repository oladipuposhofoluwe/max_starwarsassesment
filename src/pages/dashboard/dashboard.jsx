import React, {useEffect, useState} from "react";
import DateFactor from "../../components/date/datefactor";
import { DashboardCard } from "../../components/dashboard-card/DashboardCard";
import "./dashboard.css";
import DashboardLayout from "../../components/dashboard-layout/DashboardLayout";

function Dashboard(props) {
  const cardDetails = [
    { title: "films", bgColor: "#03b4d6", icon: "images/video-camera.svg" },
    { title: "people", bgColor: "#2170ff", icon: "images/phylogenetics.svg" },
    // { title: "planets", bgColor: "", icon: "" },
    { title: "species", bgColor: "#353190", icon: "" },
    { title: "starships", bgColor: "#f0d93c", icon: "images/ufo.svg" },
    { title: "vehicles", bgColor: "#635ad0", icon: "images/taxi.svg" },
  ];

  const headers = ['film title', 'director', 'producer', 'release date', 'episode', 'character'];
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/films');
      const data = await response.json();
      const { results } = data;
      setData(data => [...results]);

    } catch (responseError) {
      console.log(responseError);
    }
  }

  getData();

  useEffect(() => {
    
  }, []);


  return (
    <DashboardLayout>
      <div className="dashboard__cards">
        { cardDetails.map( ({ title, bgColor, icon }, index)=><DashboardCard key={index} title={title} bgColor={bgColor} icon={icon} />) }
      </div>
      <div className='data-table'>
        <h3>films</h3>
        <table>
          <thead>
            <tr>
          {headers.map((header, index) =>  <th key={index}> {header}</th>)}
              </tr>
          </thead>
          <tbody className="table-body">
            {
              data.map(({ title, director, release_date, episode_id,producer, characters}, index) => (
                <tr key={index}>
                  <td>{title}</td>
                  <td>{director}</td>
                  <td>{producer}</td>
                  <td>{release_date}</td>
                  <td>{episode_id}</td>
                  <td>{characters[0]}</td>
                </tr>
              ))
          }
          </tbody>
          
          

        </table>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
