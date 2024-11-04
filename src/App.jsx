import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<div>Root path</div>} />
        </Routes>
      </div>
    </div>
  );
}
