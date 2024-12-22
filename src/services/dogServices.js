import axiosInstance from "../config/axiosInstance";
import DOGS_API_ROUTES from "../config/ApiRoutes/Dogs";

const fetchDogs = async () => {
  try {
    const response = await axiosInstance.get(DOGS_API_ROUTES.GET_ALL);
    return response.data;
  } catch (error) {
    console.error("Error fetching dogs data:", error);
    throw error;
  }
};

export { fetchDogs };
