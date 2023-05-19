// App.js
import axios from "axios";
import React, { useState } from "react";

import ArcsData from "./components/ArcsData";
import CustomRoutes from "./components/CustomRoutes";
import GetArcsButton from "./components/GetArcsButton";
import MyTestForm from "./components/MyTestForm";

function App() {
  const [arcs, setArcs] = useState([]);

  const onArcsFetched = (arcsData) => {
    setArcs(arcsData);
  };
  const deleteArc = async (arcId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/arcs/${arcId}`
      );
      if (response.status === 200) {
        setArcs((prevArcs) => prevArcs.filter((arc) => arc._id !== arcId));
      }
    } catch (error) {
      console.error("Error deleting arc:", error);
    }
  };

  return (
    <div>
      <GetArcsButton onArcsFetched={onArcsFetched} />
      <ArcsData arcs={arcs} onDeleteArc={deleteArc} />
      <CustomRoutes />
      <MyTestForm />
    </div>
  );
}

export default App;
