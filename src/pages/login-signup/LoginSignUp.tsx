import "../../styles/LoginSignUp.css";
import { assets } from "../../assets/assets"; // Import file assets.ts, file này lưu trữ hình ảnh
import { useState } from "react";
import Button from "../../components/Button"; // Import Button từ components

// Component LoginSignUp dùng để hiển thị các form đăng nhập và đăng ký
export const LoginSignUp = () => {
  // State: True - Đăng ký, False - Đăng nhập
  // Mặc định là false tức là nó luôn hiển thị form đăng nhập trước
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  // Hàm để chuyển đổi giữa đăng ký và đăng nhập
  const handleToggle = (type: "login" | "register") => {
    // Logic: Nếu type là "register", state isSignUpActive sẽ được cập nhật thành true làm cho form đăng ký hiển thị
    // Nếu type là "login" thì nó sẽ trở về false
    setIsSignUpActive(type === "register");
  };

  return (
    // className "active" sẽ được thêm vào nếu isSignUpActive là true
    <div className={`container ${isSignUpActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form action="">
          <div className="header">
            <h1 className="text">Create Account</h1>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={assets.person} alt="" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input">
              <img src={assets.email} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={assets.password} alt="" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="input">
              <img src={assets.password} alt="" />
              <input type="password" placeholder="Confirm password" />
            </div>
          </div>
          <Button text="Sign Up" type="submit"></Button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form action="">
          <div className="header">
            <h1 className="text">Sign In</h1>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={assets.person} alt="" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input">
              <img src={assets.password} alt="" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <a href="#">Forgot Your Password?</a>
          <Button text="Sign In" type="submit"></Button>
        </form>
      </div>

      {/* Khung chuyển đổi giữa Đăng Ký và Đăng Nhập */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Demo text.</p>
            <Button
              text="Sign In"
              className="hidden"
              id="login"
              onClick={() => handleToggle("login")}
            ></Button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello Friend!</h1>
            <p>Demo text.</p>
            <Button
              text="Sign Up"
              className="hidden"
              id="register"
              onClick={() => handleToggle("register")}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
