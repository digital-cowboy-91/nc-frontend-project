import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RootPage from "./pages/RootPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import LoginPage from "./pages/LoginPage";
import { UserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";
import { getUserByUsername } from "./utils/api";
import TopicPage from "./pages/TopicPage";
import SingleTopicPage from "./pages/SingleTopicPage";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user");

    if (!sessionUser) return;

    getUserByUsername(sessionUser).then(() => {
      setUser(sessionUser);
    });
  }, []);

  return (
    <UserContext.Provider value={{ userCtx: user, setUserCtx: setUser }}>
      <div className="main-layout">
        <Navbar />
        <div className="page-wrapper layout-wrapper">
          <Routes>
            <Route path="/" element={<RootPage />} />
            <Route
              path="/article/:article_id"
              element={<SingleArticlePage />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/topics" element={<TopicPage />} />
            <Route path="/topics/:slug" element={<SingleTopicPage />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}
