import styled from 'styled-components';
import React, { useState } from 'react';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import {
  useDeleteTodoMutation,
  usePostTodoMutation,
  usePutTodoMutation,
  useTodos,
} from './reactQuery';

const ReactQuery = () => {
  const { data: todos } = useTodos();

  const { mutate: postMutate } = usePostTodoMutation({
    onSuccess: (result) => {
      alert(result.title + '을 저장했습니다.');
      setValue('');
    },
    onError: (error) => alert('에러가 발생했습니다.'),
  });

  const { mutate: putMutate } = usePutTodoMutation({
    onSuccess: (result) => {
      alert(result.title + '을 수정했습니다.');
    },
    onError: (error) => alert('에러가 발생했습니다.'),
  });

  const { mutate: deleteMutate } = useDeleteTodoMutation({
    onSuccess: (result) => {
      alert(result.title + '을 삭제했습니다.');
    },
    onError: (error) => alert('에러가 발생했습니다.'),
  });

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setValue(event.target.value);
  };

  const handleClickPost = () => {
    postMutate({ title: value });
  };

  const handleClickEdit = () => {
    putMutate({
      id: 1,
      payload: {
        title: value,
      },
    });
  };

  const handleClickDelete = () => {
    deleteMutate({ id: 1 });
  };

  return (
    <Container>
      <Title>Todos</Title>
      {todos?.slice(0, 5).map((item) => (
        <Item key={item.id}>{item.title}</Item>
      ))}
      <Row>
        <TextField value={value} onChange={handleChange} />
        <Button onClick={handleClickPost} style={{ marginLeft: '10px' }}>
          저장
        </Button>
        <Button onClick={handleClickEdit} style={{ marginLeft: '10px' }}>
          수정
        </Button>
        <Button onClick={handleClickDelete} style={{ marginLeft: '10px' }}>
          삭제
        </Button>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h3``;

const Item = styled.p``;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

export default ReactQuery;
