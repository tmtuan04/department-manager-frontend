import "./DashBoard.css";
import Apartments from "./mainContent/Apartment";
import FeesAndFunds from "./mainContent/FeesAndFunds";
import Overview from "./mainContent/Overview";
import Resident from "./mainContent/Resident";
import Statistics from "./mainContent/Statistics";
import Vehicles from "./mainContent/Vehicles";
import SideBar from "./sideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import Invoice from "./mainContent/Invoice";

const DashBoard = () => {
  return (
    <div className="main-dashboard">
      <SideBar />
      <div className="dashboard-content" style={{ flex: 1 }}>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/residents" element={<Resident />}></Route>
          <Route path="/apartments" element={<Apartments />}></Route>
          <Route path="/fee-and-fund" element={<FeesAndFunds />}></Route>
          <Route path="/vehicles" element={<Vehicles />}></Route>
          <Route path="/statistics" element={<Statistics />}></Route>
          <Route path="/invoices" element={<Invoice />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default DashBoard;
