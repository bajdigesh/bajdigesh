import "./styles/styles.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Index from "./components/Index/Index";
import React from "react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} exact />
      </Routes>
    </Router>
  );
};

export default App;
