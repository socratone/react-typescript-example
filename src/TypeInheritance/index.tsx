import styled from 'styled-components';

type ParentProps = {
  title: string;
};

type ChildProps = {
  description: string;
};

const TypeInheritance = ({ title, description }: ParentProps & ChildProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
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

const Description = styled.p``;

export default TypeInheritance;
