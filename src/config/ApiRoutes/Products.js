const BASE_URL = "https://pet-web-backend-ynmp.vercel.app/api";

const PRODUCTS_API_ROUTES = {
  GET_ALL: `${BASE_URL}/Products/`,
  GET_BY_ID: (id) => `${BASE_URL}/Products/${id}`,
  // Add other dog-related endpoints here
};

export default PRODUCTS_API_ROUTES;
