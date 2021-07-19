import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/dashboard-layout/DashboardLayout";
import "./starship.css";

export const Starship = () => {
  const headers = [
    "",
    "name",
    "model",
    "class",
    "credits",
    "passenger",
    "length",
    "crew",
  ];
  const [starShips, setStarShips] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/starships");
      const data = await response.json();
      const { results } = await data;
      setStarShips((starShips) => [...results]);
    } catch (requestError) {
      console.log(requestError);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <DashboardLayout>
      <section className="data-display">
        <table className="simple-table">
          <thead>
            <tr>
              {headers.map((head, index) => (
                <th key={index}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {starShips.map(
              (
                {
                  name,
                  model,
                  starship_class,
                  cost_in_credits,
                  passengers,
                  length,
                  crew,
                },
                index
              ) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      name="checker"
                      id="check"
                      value={index}
                    />
                  </td>
                  <td>{name}</td>
                  <td>{model}</td>
                  <td>{starship_class}</td>
                  <td>{cost_in_credits}</td>
                  <td>{passengers}</td>
                  <td>{length}</td>
                  <td>{crew}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </section>
    </DashboardLayout>
  );
};
