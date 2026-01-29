// Ensure this matches your .env.local key
//centralized point to store all my endpoints addresses and really easy to change even in production

const BASE_URL_Backend = process.env.BACKEND_API_URL; // I just need to assign another value in the production dashboar
                                                        //for the variable BACKEND_API_URL

export const API_ENDPOINTS = {
  USERS: {
    CREATE: `${BASE_URL_Backend }/profile_service/users/createUser`,
    LIST: `${BASE_URL_Backend }/profile_service/users`,
    DETAILS: (id: string) => `${BASE_URL_Backend }/profile_service/users/${id}`,
  },
  AUTH: {
    LOGIN: `${BASE_URL_Backend }/auth_service/login`,
    LOGOUT: `${BASE_URL_Backend }/auth_service/logout`,
  },
  PRODUCTS: {
    GET_ALL: `${BASE_URL_Backend }/inventory_service/products`,
  }
};