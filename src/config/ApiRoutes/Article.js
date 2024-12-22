const BASE_URL = "https://pet-web-backend-ynmp.vercel.app/api";

const ARTICLES_API_ROUTES = {
  GET_ALL: `${BASE_URL}/articles/`,
  GET_BY_ID: (id) => `${BASE_URL}/articles/${id}`,
  // Add other dog-related endpoints here
};

export default ARTICLES_API_ROUTES;
