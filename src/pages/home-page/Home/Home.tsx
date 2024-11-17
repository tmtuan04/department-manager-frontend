import { assets } from "../../../assets/assets";
import TechMarquee from "../partials/TechMarquee";
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container full-height-page">
          {/* Main */}
          <div className="home__main">
            <div className="main__left">
              <div className="left__title">
                Discover And Manage Exclusive Condo Amenities
              </div>

              <div className="left__desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti quod dolor, quidem consequuntur
              </div>

              <div className="left__button">
                <a href="#" className="button button__active">
                  Sign In
                </a>
                <a href="#" className="button button-contact">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="main__right">
              <div className="right__img">
                <img src={assets.homepage_main} alt="computer_img" />
              </div>
            </div>
          </div>
          {/* End Main */}

          {/* Tech */}
          <TechMarquee />
          {/* End Tech */}
        </div>
      </section>
    </>
  );
};

export default Home;
