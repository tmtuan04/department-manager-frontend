import Footer from "../partials/Footer";
import "./contact-us.css";

const ContactUs = () => {
  return (
    <>
      <section className="contact-us" id="contact-us">
        <div className="container">
          <div className="inner-contact-us">
            <div className="contact-us__title">Contact Us</div>
            <div className="contact-us__body">
              <div className="body__left">
                {Array(7)
                  .fill(null)
                  .map((_, index) => (
                    <div className="left__item" key={index}>
                      <div className="icon">
                        <i className="bx bx-current-location"></i>
                      </div>
                      <div className="content">
                        1D. Dai Co Viet, Hai Ba Trung, Ha Noi
                      </div>
                    </div>
                  ))}
              </div>
              <div className="body__right">
                <form className="right-form">
                  <div className="form__input">
                    <input type="text" name="name" placeholder="Your Name" />
                  </div>

                  <div className="form__input">
                    <input type="text" name="email" placeholder="Your Email" />
                  </div>
                  <div className="form__input">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <div className="form__input">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ContactUs;
