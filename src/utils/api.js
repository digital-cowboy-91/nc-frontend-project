import axios from "axios";
import { API_BASE_URL } from "./constants";

const api = axios.create({ baseURL: API_BASE_URL });

export const getTopics = () => api.get("/topics").then((res) => res.data);

export const getArticles = (queries) =>
  api.get("/articles", { params: queries }).then((res) => res.data);

export const getArticleById = (id) =>
  api.get(`/articles/${id}`).then((res) => res.data);

export const getArticleComments = (id, queries) =>
  api
    .get(`/articles/${id}/comments`, { params: queries })
    .then((res) => res.data);

export const patchComment = (id, inc_votes) =>
  api.patch(`/comments/${id}`, { inc_votes }).then((res) => res.data);

export const patchArticle = (id, inc_votes) =>
  api.patch(`/articles/${id}`, { inc_votes }).then((res) => res.data);

export const postComment = (id, { username, body }) =>
  api
    .post(`/articles/${id}/comments`, { username, body })
    .then((res) => res.data);

export const deleteComment = (id) => api.delete(`/comments/${id}`);

export const getUserByUsername = (username) =>
  api.get(`/users/${username}`).then((res) => res.data);

export const getUsers = () => api.get("/users").then((res) => res.data);
