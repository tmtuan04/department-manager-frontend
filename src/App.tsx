import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import HomePage from "./pages/home-page/HomePage";
// import { LoginSignUp } from './pages/login-signup/LoginSignUp'
// import DashBoard from './pages/dashboard/DashBoard'
// import DemoTailwind from './pages/DemoTailwind'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashBoard from "./pages/dashboard/DashBoard";
import Residents from "./pages/dashboard/mainContent/Residents";
import { GlobalStyles } from "./GlobalStyles";
import { NotFound } from "./pages/not-found/NotFound";
import LoginSignUp from "./pages/login-signup/LoginSignUp";
import MainDashBoard from "./pages/dashboard/mainContent/MainDashBoard";
import Apartments from "./pages/dashboard/mainContent/Apartments";
import Vehicles from "./pages/dashboard/mainContent/Vehicles";
import FeesAndFunds from "./pages/dashboard/mainContent/FeesAndFunds";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      stateTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    // <HomePage />
    // <DashBoard />
    // <DemoTailwind />
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="homepage" element={<HomePage />} />
          <Route path="dashboard" element={<DashBoard />}>
            <Route path="" element={<MainDashBoard />} />
            <Route path="residents" element={<Residents />} />
            <Route path="apartments" element={<Apartments />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="fee-and-fund" element={<FeesAndFunds />} />
          </Route>

          <Route path="login" element={<LoginSignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* Hien thong bao */}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
    // <>
    //
    // <Residents />
    // </>
  );
};

export default App;
