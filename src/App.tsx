import { NotFound } from "./pages/not-found/NotFound";
import HomePage from "./pages/home-page/HomePage";
import LoginSignUp from "./pages/login-signup/LoginSignUp";
import DashBoard from "./pages/dashboard/DashBoard";
import DemoTailwind from "./pages/DemoTailwind";
import Resident from "../src/pages/dashboard/mainContent/Resident"

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signin" element={<LoginSignUp />}></Route>
        <Route path="/dashboard/*" element={<DashBoard />}></Route>
        <Route path="/test-tail-wind-css" element={<DemoTailwind />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
