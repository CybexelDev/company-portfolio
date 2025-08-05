
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const fetchTeam = () => api.get("/team/");
export const fetchWorks = () => api.get("/works/");
export const fetchSelectedWork = (id) => api.get(`/works/<int:id>/`);
export const fetchCustomers = () => api.get("/customers/");
