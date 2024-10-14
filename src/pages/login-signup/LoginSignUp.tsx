import "../../styles/LoginSignUp.css";
import { assets } from "../../assets/assets";
// import { useState } from "react";
import Button from "../../components/Button";

// Component LoginSignUp dùng để hiển thị giao diện đăng nhập và đăng ký
export const LoginSignUp = () => {
  return (
    <div className="container" id="container">
      <div className="form-container signup">
        <form action="">
          {/* Đoạn này cần check lại xem có cần tạo hai cái không */}
          <div className="header">
            <h1>Create Account</h1>
            {/* Gạch ngang dưới chân cho đẹp */}
            <div className="underline"></div>
          </div>
          <div className="input">
            <img src= {assets.person} alt="" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input">
            <img src= {assets.email} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src= {assets.password} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="input">
            <img src= {assets.password} alt="" />
            <input type="password" placeholder="Confirm password" />
          </div>
          <Button text="Sign Up" type="submit"></Button>
          
        </form>
      </div>
      <div className="form-container signin">
        <form action="">
          <div className="header">
            <h1>Sign In</h1>
            <div className="underline"></div>
          </div>
          <div className="input">
            <img src= {assets.person} alt="" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input">
            <img src= {assets.password} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          <a href="#">Forgot Your Password?</a>
          <Button text="Sign In" type="submit"></Button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel-toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            {/* <button className="hidden" id="login">Sign In</button> */}
            <Button text="Sign In" className="hidden" id="login"></Button>
          </div>
          <div className="toggle-panel-toggle-right">
            <h1>Hello Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            {/* <button className="hidden" id="register">Sign Up</button> */}
            <Button text="Sign Up" className="hidden" id="register"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
