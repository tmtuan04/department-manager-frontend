import { assets } from "../../assets/assets";
import "./NotFound.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="nf-container">
      <img src= {assets.error} alt="Error Image" style={{ width: "40%" }}/>
      <div className="text-section">
        <h1 className="oops-text">Oops!</h1>
        <p className="text-dn text1">We couldn't find that page.</p>
        <p className="text-dn text2">Maybe you can find what you need here?</p>

        <div className="buttons">
          <Link to="/" className="button">Back to Homepage</Link>
          {/* <Link href="#" className="button">Contact Us</Link> */}
        </div>
      </div>
    </div>
  );
};
