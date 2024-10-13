// Import các file và hình ảnh cần thiết => Nên tạo file js để lưu ảnh thì đỡ phải import nhiều
import "../../styles/LoginSignUp.css";
// import user_icon from "../../assets/person.png";
// import email_icon from "../../assets/email.png";
// import password_icon from "../../assets/password.png";
// import { useState } from "react";


// Component LoginSignUp dùng để hiển thị giao diện đăng nhập và đăng ký
export const LoginSignUp = () => {

  return (
    <div className="container" id="container">
      <div className="form-container signup"></div>
        <form action="">
          <h1>Create Account</h1>
          <input type="text" placeholder="UserName"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>Sign Up</button>
        </form>
    </div>
  );
};
