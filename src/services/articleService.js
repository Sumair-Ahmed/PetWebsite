import axiosInstance from "../config/axiosInstance";
import ARTICLES_API_ROUTES from "../config/ApiRoutes/Article";

const fetchArticles = async () => {
  try {
    const response = await axiosInstance.get(ARTICLES_API_ROUTES.GET_ALL);
    return response.data;
  } catch (error) {
    console.error("Error fetching Article data:", error);
    throw error;
  }
};

export { fetchArticles };
