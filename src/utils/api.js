import axios from "axios";
import { API_BASE_URL } from "./constants";

const api = axios.create({ baseURL: API_BASE_URL });

export const getTopics = () => api.get("/topics").then((res) => res.data);

export const getArticles = () => api.get("/articles").then((res) => res.data);

export const getArticleById = (id) =>
  api.get(`/articles/${id}`).then((res) => res.data);

export const getArticleComments = (id) =>
  api.get(`/articles/${id}/comments`).then((res) => res.data);

export const patchComment = (id, inc_votes) =>
  api.patch(`/comments/${id}`, { inc_votes }).then((res) => res.data);

export const patchArticle = (id, inc_votes) =>
  api.patch(`/articles/${id}`, { inc_votes }).then((res) => res.data);

export const postComment = (id, { username, body }) =>
  api
    .post(`/articles/${id}/comments`, { username, body })
    .then((res) => res.data);
