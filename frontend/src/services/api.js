import axios from "axios";

const api = axios.create({
  baseURL: "https://bookease-1-jbfa.onrender.com/api",
});

export default api;
