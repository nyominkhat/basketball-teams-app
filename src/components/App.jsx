import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "./Loading";
// to not download before user access these component
const Article = React.lazy(() => import("./Article"));
const Articles = React.lazy(() => import("./Articles"));
const Home = React.lazy(() => import("./Home"));
const Player = React.lazy(() => import("./Player"));
const Players = React.lazy(() => import("./Players"));
const Team = React.lazy(() => import("./Team"));
const TeamPage = React.lazy(() => import("./TeamPage"));
const Teams = React.lazy(() => import("./Teams"));

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/players" element={<Players />}>
                <Route path=":name" element={<Player />} />
                <Route
                  path=""
                  element={
                    <div className="sidebar-instruction">Select a player</div>
                  }
                />
              </Route>
              <Route path="/teams" element={<Teams />}>
                <Route path=":teamId" element={<Team />} />
                <Route
                  path=""
                  element={
                    <div className="sidebar-instruction">Select a Team</div>
                  }
                />
              </Route>
              <Route path="/:teamId" element={<TeamPage />} />
              <Route path="/:teamId/articles" element={<Articles />}>
                <Route path=":articleId" element={<Article />} />
                <Route
                  path=""
                  element={
                    <div className="sidebar-instruction">Select a Article</div>
                  }
                />
              </Route>
            </Routes>
          </React.Suspense>
        </div>
      </Router>
    </>
  );
};

export default App;
