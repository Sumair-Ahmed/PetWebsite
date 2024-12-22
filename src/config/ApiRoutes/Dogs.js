const BASE_URL = "https://pet-web-backend-ynmp.vercel.app/api";

const DOGS_API_ROUTES = {
  GET_ALL: `${BASE_URL}/dogs/`,
  GET_BY_ID: (id) => `${BASE_URL}/dogs/${id}`,
  // Add other dog-related endpoints here
};

export default DOGS_API_ROUTES;
