// Import các file và hình ảnh cần thiết => Nên tạo file js để lưu ảnh thì đỡ phải import nhiều
import "../../styles/LoginSignUp.css";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { useState } from "react";


// Component LoginSignUp dùng để hiển thị giao diện đăng nhập và đăng ký
export const LoginSignUp = () => {
  // State để quản lý chế độ hiện tại là "Login" hay "Sign Up"
  const [action, setAction] = useState("Sign Up");
  
  // State để quản lý giá trị của các input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hàm này sẽ được gọi mỗi khi chuyển đổi giữa "Login" và "Sign Up"
  const handleSwitchAction = (newAction: string) => {
    // Cập nhật lại action (chuyển đổi giữa "Login" và "Sign Up")
    setAction(newAction);
    // Xóa hết giá trị của các input mỗi khi chuyển đổi
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {/* Nếu action là "Login" thì ẩn input "Username" */}
        {action === "Login" ? "" :
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update state on input change
          />
        </div>}
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
          />
        </div>
      </div>

      {action === "Sign Up" ? " " :
      <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => handleSwitchAction("Sign Up")} // Use handleSwitchAction to switch action and clear inputs
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => handleSwitchAction("Login")} // Use handleSwitchAction to switch action and clear inputs
        >
          Login
        </div>
      </div>
    </div>
  );
};
