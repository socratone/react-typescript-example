import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import {
  getTodos,
  postTodo,
  PostTodoPayload,
  PostTodoResponseData,
} from '../Axios/api';

export const useTodos = () => {
  return useQuery(
    ['todos'],
    async () => {
      return await getTodos();
    },
    {
      enabled: true,
    }
  );
};

type UsePostTodoMutationParams = {
  onSuccess: (data: PostTodoResponseData) => void;
  onError: (error: AxiosError) => void;
};

export const usePostTodoMutation = ({
  onError,
  onSuccess,
}: UsePostTodoMutationParams) => {
  return useMutation<PostTodoResponseData, AxiosError, PostTodoPayload>(
    (payload) =>
      postTodo({
        payload,
        parameters: {},
        headerParameters: {},
      }),
    {
      onError,
      onSuccess,
    }
  );
};
