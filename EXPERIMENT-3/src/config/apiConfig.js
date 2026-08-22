import axios from "axios";
const api = axios.create({
  baseURL:
    "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    "Content-Type":
      "application/json"
  }
});

/* =========================
   REQUEST INTERCEPTOR
========================= */

api.interceptors.request.use(
  (config) => {
    console.log(
      "Request sent:",
      config.url
    );
    const token =
      localStorage.getItem("token");
    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* =========================
   RESPONSE INTERCEPTOR
========================= */

api.interceptors.response.use(
  (response) => {
    console.log(
      "Response received:",
      response.status
    );
    return response;
  },
  (error) => {
    console.error(
      "API Error:",
      error.message
    );
    return Promise.reject(error);
  }
);
export default api;
