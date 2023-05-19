// ArcsData.js
import React from "react";

const ArcsData = ({ arcs, onDeleteArc }) => {
  console.log("arcs", arcs);

  const handleDeleteButtonClick = (arcId) => {
    onDeleteArc(arcId);
  };

  return (
    <div>
      <h1>Arcs Data</h1>
      <ul>
        {arcs.map((arc) => {
          return (
            <li key={arc._id}>
              <div>{arc.node}</div>
              <div>{arc.body}</div>
              <div>{arc.size}</div>
              <button onClick={() => handleDeleteButtonClick(arc._id)}>
                Delete Arc
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArcsData;
