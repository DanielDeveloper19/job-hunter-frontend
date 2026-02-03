// Ensure this matches your .env.local key
//centralized point to store all my endpoints addresses and really easy to change even in production

//Now these Constants should aim towards the Api Gateway

const Invoke_URL_Api_Gateway = process.env.Invoke_URL_Api_Gateway; // I just need to assign another value in the production dashboar
                                                        //for the variable BACKEND_API_URL

export const API_ENDPOINTS = {
  USERS: {
    CREATE: `${Invoke_URL_Api_Gateway }/profile_service/users/createUser`,
    LIST: `${Invoke_URL_Api_Gateway }/profile_service/users`,
    DETAILS: (id: string) => `${Invoke_URL_Api_Gateway }/profile_service/users/${id}`,
  },
  AUTH: {
    LOGIN: `${Invoke_URL_Api_Gateway }/auth_service/login`,
    LOGOUT: `${Invoke_URL_Api_Gateway }/auth_service/logout`,
  },
  PRODUCTS: {
    GET_ALL: `${Invoke_URL_Api_Gateway }/inventory_service/products`,
  }
};