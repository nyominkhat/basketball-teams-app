import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Players from "./Players";
import Teams from "./Teams";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
