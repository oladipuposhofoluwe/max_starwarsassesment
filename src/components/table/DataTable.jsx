import React from "react";
import "./data-table.css";

export const DataTable = ({ headers }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map(
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
  );
};
