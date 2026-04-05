import axios from "axios";

const instance = axios.create({
  baseURL: "https://bookease-1-jbfa.onrender.com",
});

export default instance;
