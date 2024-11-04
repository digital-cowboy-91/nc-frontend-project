import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RootPage from "./pages/RootPage";
import SingleArticlePage from "./pages/SingleArticlePage";

export default function App() {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="page-wrapper content">
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/article/:article_id" element={<SingleArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}
