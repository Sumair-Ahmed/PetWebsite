import axiosInstance from "../config/axiosInstance";
import PRODUCTS_API_ROUTES from "../config/ApiRoutes/Products";

const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get(PRODUCTS_API_ROUTES.GET_ALL);
    return response.data;
  } catch (error) {
    console.error("Error fetching Products data:", error);
    throw error;
  }
};

export { fetchProducts };
