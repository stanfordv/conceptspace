// GetArcsButton.js
import axios from "axios";
import React from "react";

const GetArcsButton = ({ onArcsFetched }) => {
  console.log("onArcsFetched", onArcsFetched);
  const handleButtonClick = () => {
    axios
      .get("http://localhost:5000/arcs")
      .then((response) => {
        onArcsFetched(response.data);
      })
      .catch((error) => {
        console.error("Error fetching arcs: ", error);
      });
  };

  return <button onClick={handleButtonClick}>Get Arcs</button>;
};

export default GetArcsButton;
