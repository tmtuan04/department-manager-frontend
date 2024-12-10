import "./DashBoard.css";
import Resident from "./mainContent/Resident";
import SideBar from "./sideBar/SideBar";
import { Routes, Route } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="main-dashboard">
      <SideBar />
      <div className="dashboard-content" style={{ flex: 1 }}>
        {/* Routes */}
        <Routes>
          <Route path="/resident-management" element={<Resident />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default DashBoard;
