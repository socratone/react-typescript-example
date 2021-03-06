import styled from 'styled-components';
import User from './User';
import UserItems from './UserItems';

const Class = () => {
  const users: User[] = [new User('John'), new User('Peter')];

  return (
    <Container>
      <UserItems items={users} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export default Class;
