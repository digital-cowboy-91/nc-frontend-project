import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RootPage from "./pages/RootPage";

export default function App() {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<RootPage />} />
        </Routes>
      </div>
    </div>
  );
}
