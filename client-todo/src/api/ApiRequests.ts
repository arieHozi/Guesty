import axios from "axios";
import { TodoType } from "../types";

const baseApi = "http://localhost:4000/api/todos";
export const getAll = () => {
  return axios.get(baseApi);
};

export const createTodo = (data: TodoType) => {
  return axios.post(baseApi, data);
};

export const updateTodo = (id: string) => {
  return axios.put(`${baseApi}/${id}`);
};

export const deleteTodo = (id: string) => {
  return axios.delete(`${baseApi}/${id}`);
};
