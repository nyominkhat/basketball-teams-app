import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
import Home from "./Home";
import Navbar from "./Navbar";
import Player from "./Player";
import Players from "./Players";
import Team from "./Team";
import TeamPage from "./TeamPage";
import Teams from "./Teams";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />}>
              <Route path=":name" element={<Player />} />
            </Route>
            <Route path="/teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
            </Route>
            <Route path="/:teamId" element={<TeamPage />} />
            <Route path="/:teamId/articles" element={<Articles />}>
              <Route path=":articleId" element={<Article />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
