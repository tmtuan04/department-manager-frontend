import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthService } from "./AuthService";

interface UserResponse {
  id: string;
  email: string;
  name: string;
}

export const AuthCallbackComponent: React.FC = () => {
  const [userResponse, setUserResponse] = useState<UserResponse | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const url = location.pathname;
    let loginType: "google" | "facebook" | undefined;

    if (url.includes("/auth/google/callback")) {
      loginType = "google";
    } else if (url.includes("/auth/facebook/callback")) {
      loginType = "facebook";
    }

    if (!loginType) {
      console.error("Không xác định được nhà cung cấp xác thực");
      return;
    }

    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code) {
      AuthService.exchangeCodeForToken(code, loginType)
        .then((response) => {
          setUserResponse(response);
          console.log("Đăng nhập thành công:", response);
        })
        .catch((error: any) => {
          console.error("Lỗi khi trao đổi mã token:", error?.response?.data?.message || "");
        });
    } else {
      console.error("Mã xác thực không hợp lệ");
    }
  }, [location]);

  return (
    <div>
      {userResponse ? (
        // todo: fix -> trả về trang chủ với thông tin đã đăng nhập
        <div>
          <h2>Chào mừng bạn đến với trang chủ BlueMoon {userResponse.name}</h2>
        </div>
      ) : (
        <p>Đang xử lý xác thực...</p>
      )}
    </div>
  );
};
