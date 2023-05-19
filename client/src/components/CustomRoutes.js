import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./About";
import ArcsData from "./ArcsData";
import Home from "./Home";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/arcs-data" element={<ArcsData />} />
      {/* <Route path="*" element={<NoMatch />} />  */}
    </Routes>
  );
};

export default CustomRoutes;
