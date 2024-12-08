import axios from "axios";

const apiBaseUrl = "http://localhost:8080";

export const AuthService = {
  /**
   * Fetches the social login authentication URL.
   * @param loginType - The type of login ('facebook' or 'google').
   * @returns A promise resolving to the redirect URL.
   */
  authenticate(loginType: "facebook" | "google"): Promise<string> {
    return axios
      .get<{ code: number; message: string; data: string }>(`${apiBaseUrl}/users/auth/social-login`, {
        params: { "login-type": loginType },
      })
      .then((response) => {
        if (response.data.code === 200) {
          return response.data.data; // Trả về URL từ trường `data`
        } else {
          throw new Error(response.data.message || "Authentication failed");
        }
      });
  },

  /**
   * Exchanges the code received from the social login provider for an authentication token.
   * @param code - The authorization code.
   * @param loginType - The type of login ('facebook' or 'google').
   * @returns A promise resolving to the server's response.
   */
  exchangeCodeForToken(code: string, loginType: "facebook" | "google"): Promise<any> {
    const params = new URLSearchParams({
      code,
      login_type: loginType,
    });

    return axios.get(`${apiBaseUrl}/users/auth/social/callback?${params.toString()}`).then((response) => response.data);
  },
};
