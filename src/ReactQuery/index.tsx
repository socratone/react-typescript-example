import styled from 'styled-components';
import React, { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { usePostTodoMutation, useTodos } from './reactQuery';

const ReactQuery = () => {
  const { data: todos } = useTodos();

  const { mutate } = usePostTodoMutation({
    onSuccess: (result) => {
      alert(result.title + '을 저장했습니다.');
      setValue('');
    },
    onError: (error) => alert('에러가 발생했습니다.'),
  });

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    mutate({ title: value });
  };

  return (
    <Container>
      <Title>Todos</Title>
      {todos?.slice(0, 5).map((item) => (
        <Item key={item.id}>{item.title}</Item>
      ))}
      <Row>
        <TextField value={value} onChange={handleChange} />
        <Button onClick={handleClick} style={{ marginLeft: '10px' }}>
          저장
        </Button>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid gainsboro;
  border-radius: 10px;
`;

const Title = styled.h3``;

const Item = styled.p``;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

export default ReactQuery;
