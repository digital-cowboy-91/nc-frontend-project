import axios from "axios";
import { API_BASE_URL } from "./constants";

export const api = axios.create({ baseUrl: API_BASE_URL });
