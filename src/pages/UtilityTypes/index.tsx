import styled from 'styled-components';

type Data = {
  id: string;
  name: string;
  gender: 'male' | 'female';
};

const UtilityTypes = () => {
  const setPartialData = () => {
    // undefined가 가능하도록 변환
    const newData: Partial<Data> = {};
    newData.name = 'Peter';
    return newData;
  };

  const setPickData = () => {
    // 두 번째 파라미터로 받는 key만 선택해서 타입 설정
    const newData: Pick<Data, 'id' | 'name'> = {
      id: '1',
      name: 'John',
    };
    return newData;
  };

  const setOmitData = () => {
    // 두 번째 파라미터로 받는 key만 제외해서 타입 설정
    const newData: Omit<Data, 'gender'> = {
      id: '1',
      name: 'John',
    };
    return newData;
  };

  return (
    <Container>
      <div>{setPartialData().gender}</div>
      <div>{setPickData().name}</div>
      <div>{setOmitData().name}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export default UtilityTypes;
