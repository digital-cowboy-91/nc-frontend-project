import axios from "axios";
import { API_BASE_URL } from "./constants";

const api = axios.create({ baseURL: API_BASE_URL });

export const getTopics = () => api.get("/topics").then((res) => res.data);
