import "./about-us.css";
import { assets } from "../../../assets/assets";

const AboutUs = () => {
  return (
    <>
      <section className="about-us" id="about-us">
        <div className="container-tdn">
          <div className="inner-about-us">
            <div className="about-us__left">
              <div className="left__image">
                <img src={assets.about_us} alt="" />
              </div>
            </div>

            <div className="about-us__right">
              <div className="right__title">About Us</div>

              <div className="right__desc">
                At HustCity, we are dedicated to providing exceptional services
                with a focus on reliability, innovation, and customer
                satisfaction. Our team is committed to exceeding expectations by
                creating personalized experiences that meet your unique needs.
                We prioritize transparency, integrity, and the highest quality
                standards in everything we do. Whether you're looking for
                tailored solutions or expert advice, we're here to support you
                every step of the way.
              </div>

              <div className="right__icon">
                <ul className="list-icon">
                  <li>
                    <a href="https://github.com/">
                      <i className="bx bxl-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="bx bxl-linkedin-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
