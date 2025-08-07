// src/api/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // or your deployed URL
});

export const fetchTeam = () => api.get("/team/");
export const fetchWorks = () => api.get("/works/")
export const fetchSelectedWork = (id) => api.get(`/works/${id}/`);
export const fetchCustomers = () => api.get("/customers/");

export const fetchExpertise = () => api.get("/expertise/");
export const fetchExpertiseDetail = (id) => api.get(`/expertise/${id}/`);

