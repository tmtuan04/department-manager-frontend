import "./LoginSignUp.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { AuthService } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Component LoginSignUp dùng để hiển thị các form đăng nhập và đăng ký
const LoginSignUp = () => {
  // State: True - Đăng ký, False - Đăng nhập
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({ name: "", username: "", password: "", confirm: "" });
  const [remember, setRemember] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);

  const navigate = useNavigate();

  const handleToggle = (type: "login" | "register") => {
    setIsSignUpActive(type === "register");
  };

  const handleRememberChange = (e: any) => {
    setRemember(e.target.checked);
  };

  useEffect(() => {
    if (!isGoogleLogin) {
      const rememberedData = JSON.parse(localStorage.getItem("remember"));
      if (rememberedData) {
        setLoginData(rememberedData);
        setRemember(true);
      }
    }
  }, [isGoogleLogin]);

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/users/register", {
        name: registerData.name,
        username: registerData.username,
        password: registerData.password,
      });

      if (response.status === 201) {
        // localStorage.setItem("name", response.data.data.name);
        // navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/login", {
        username: loginData.username,
        password: loginData.password,
      });

      const { accessToken, user } = response.data.data;

      // Lưu thông tin đăng nhập vào localStorage nếu chọn "Remember for 3 days"
      if (remember) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("name", user.name);
        localStorage.setItem("id", user.id);
        localStorage.setItem(
          "remember",
          JSON.stringify({ username: loginData.username, password: loginData.password })
        );
      } else {
        // Nếu không chọn "Remember", chỉ lưu accessToken và tên
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("name", user.name);
      }

      navigate("/dashboard");
      toast.success("Login successful!");
    } catch (error) {
      toast.error("Có lỗi xảy ra!!");
      // console.error("Login Failed!", error);
    }
  };

  const loginWithGoogle = async () => {
    setIsGoogleLogin(true);
    try {
      const url = await AuthService.authenticate("google");
      window.location.href = url;
    } catch (error: any) {
      console.error("Lỗi xác thực với Google: ", error?.response?.data?.message || "");
      setIsGoogleLogin(false);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="main-sign-in-up">
      <div className={`container-dn ${isSignUpActive ? "active" : ""}`} id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form onSubmit={handleSignUp}>
            <div className="header">
              <h1 className="text">Create Account</h1>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <input
                  className="w-full outline-blue-500 border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent"
                  type="text"
                  placeholder="Name"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                />
              </div>
              <div className="input">
                <input
                  className="w-full outline-blue-500 border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent"
                  type="email"
                  placeholder="Email"
                  autoComplete="username"
                  value={registerData.username}
                  onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                />
              </div>
              <div className="input">
                <input
                  className="w-full outline-blue-500 border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent"
                  type="password"
                  placeholder="Password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  autoComplete="new-password"
                />
              </div>
              <div className="input">
                <input
                  className="w-full outline-blue-500 border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent"
                  type="password"
                  placeholder="Confirm password"
                  value={registerData.confirm}
                  onChange={(e) => setRegisterData({ ...registerData, confirm: e.target.value })}
                  autoComplete="new-password"
                />
              </div>
            </div>
            <button className="btn-tdn" type="submit">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <div className="header">
              <h1 className="text">Sign In</h1>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  className="w-full outline-blue-500 border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent"
                  placeholder="Username"
                  name="username"
                  value={loginData.username}
                  onChange={handleInputChange}
                  autoComplete="username"
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  className="w-full outline-blue-500 border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent"
                  placeholder="Password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="mt-4 mr-20 remember-container">
              <input
                className="scale-110"
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={handleRememberChange}
              />
              <label className="ml-2 text-base remember" htmlFor="remember">
                Remember me
              </label>
            </div>
            {/* {error && <p className="error">{error}</p>} */}
            <button className="btn-tdn" type="submit">
              Sign In
            </button>

            {/* Login with Google Button */}
            <div className="social-login">
              <button
                onClick={loginWithGoogle}
                className="mt-3 p-3 google-login-btn active:scale-95 hover:scale-[1.02] font-medium flex justify-center items-center rounded-xl border-2 border-gray-200 py-2 gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 262"
                  id="google"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
                </svg>
                Sign in with Google
              </button>
            </div>
          </form>
        </div>

        {/* Khung chuyển đổi giữa Đăng Ký và Đăng Nhập */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1 className="text-tdn">Welcome Back!</h1>
              <p>
                If you already have an account, <strong>Sign in</strong>
              </p>
              <button id="login" className="btn-tdn-2" onClick={() => handleToggle("login")}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1 className="text-tdn">Hello Friend!</h1>
              <p>
                Do you have an accout? If not, please <strong>Sign Up</strong>
              </p>
              <button id="register" className="btn-tdn-2" onClick={() => handleToggle("register")}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
