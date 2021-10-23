import axios from 'axios';
const URL = `https://koreanjson.com/todos`;

export type Todos = {
  UserId: number;
  completed: boolean;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
}[];

export const getTodos = () => {
  return axios.get<Todos>(URL).then((res) => {
    return res.data;
  });
};

export type PostTodoPayload = {
  title: string;
};

type PostTodoParams = {
  payload: PostTodoPayload;
  parameters?: {};
  headerParameters?: {};
};

export type PostTodoResponseData = {
  title: string;
};

export const postTodo = ({
  payload,
  parameters,
  headerParameters,
}: PostTodoParams) => {
  return axios
    .post<PostTodoResponseData>(URL, payload, {
      params: parameters,
      headers: headerParameters,
    })
    .then((res) => {
      return res.data;
    });
};

type PutTodoParams = {
  id: number;
  payload: {
    title: string;
  };
  parameters?: {};
  headerParameters?: {};
};

type PutTodoResponseData = {
  title: string;
};

export const putTodo = ({
  id,
  payload,
  parameters,
  headerParameters,
}: PutTodoParams) => {
  return axios
    .put<PutTodoResponseData>(URL + '/' + id, payload, {
      params: parameters,
      headers: headerParameters,
    })
    .then((res) => {
      return res.data;
    });
};

type DeleteTodoParams = {
  id: number;
  headerParameters?: {};
};

type DeleteTodoResponseData = {
  title: string;
};

export const deleteTodo = ({ id, headerParameters }: DeleteTodoParams) => {
  return axios.delete<DeleteTodoResponseData>(URL + '/' + id, {
    params: {},
    headers: headerParameters,
  });
};
