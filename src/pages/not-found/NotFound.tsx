import { assets } from "../../assets/assets";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="container">
      <img src= {assets.error} alt="Error Image" />
      <div className="text-section">
        <h1 className="oops-text">Oops!</h1>
        <p className="text text1">We couldn't find that page.</p>
        <p className="text text2">Maybe you can find what you need here?</p>

        <div className="buttons">
          <a href="#" className="button">Help 1</a>
          <a href="#" className="button">Help 2</a>
          <a href="#" className="button">Help 3</a>
        </div>
      </div>
    </div>
  );
};
