import axios from "axios";

const api = axios.create({
  baseURL: "https://tranquil-river-53049-65f1a1de2e8e.herokuapp.com",
});

export default api;
