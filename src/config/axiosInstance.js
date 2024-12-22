import axios from "axios";
export const BASE_URL_WEBSITE = "https://pet-web-backend-ynmp.vercel.app//";
const axiosInstance = axios.create({
  timeout: 10000,
});

export default axiosInstance;
