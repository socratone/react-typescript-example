import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { getTodos, postTodo, Todos } from './api';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

const Axios = () => {
  const [items, setItems] = useState<Todos>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    (async () => {
      const todos = await getTodos();
      setItems(todos.slice(0, 5));
    })();
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setValue(event.target.value);
  };

  const handleClick = async () => {
    try {
      const result = await postTodo({ payload: { title: value } });
      alert(result.title + '을 저장했습니다.');
    } catch (error) {
      alert('에러가 발생했습니다.');
    }
    setValue('');
  };

  return (
    <Container>
      <Title>Todos</Title>
      {items.map((item) => (
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

export default Axios;
