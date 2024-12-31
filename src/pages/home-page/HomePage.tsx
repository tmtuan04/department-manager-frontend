import "../home-page/home-page.css";
import Header from "./partials/Header";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import OurTeam from "./OurTeam/OurTeam";
import ContactUs from "./ContactUs/ContactUs";

import { useEffect } from "react";
import { highlightMenuOnScroll } from "./ScrollPage";

const HomePage = () => {
  useEffect(() => {
    highlightMenuOnScroll();
  }, []);

  return (
        <div className="home-page">
          <Header />
          <Home />
          <AboutUs />
          <OurTeam />
          <ContactUs />
        </div>
  );
};

export default HomePage;
