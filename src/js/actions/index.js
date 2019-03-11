import { ADD_ARTICLE, ADD_TRIANGLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function addTriangle(payload) {
  return { type: ADD_TRIANGLE, payload };
}
