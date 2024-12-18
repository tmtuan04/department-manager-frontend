import "./DashBoard.css";
import Apartments from "./mainContent/Apartment";
import FeesAndFunds from "./mainContent/FeesAndFunds";
import Resident from "./mainContent/Resident";
import Statistics from "./mainContent/Statistics";
import Vehicles from "./mainContent/Vehicles";
import SideBar from "./sideBar/SideBar";
import { Routes, Route } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="main-dashboard">
      <SideBar />
      <div className="dashboard-content" style={{ flex: 1 }}>
        {/* Routes */}
        <Routes>
          <Route path="/residents" element={<Resident />}></Route>
          <Route path="/apartments" element={<Apartments />}></Route>
          <Route path="/fee-and-fund" element={<FeesAndFunds />}></Route>
          <Route path="/vehicles" element={<Vehicles />}></Route>
          <Route path="/statistics" element={<Statistics />} ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default DashBoard;
