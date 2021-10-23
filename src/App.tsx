import styled from 'styled-components';
import Axios from './Axios';
import TypeInheritance from './TypeInheritance';

function App() {
  return (
    <Container>
      <SubTitle>타입 상속</SubTitle>
      <TypeInheritance
        title="타입스크립트"
        description="타입스크립트는 재미있다."
      />

      <SubTitle>Axios</SubTitle>
      <Axios />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;

  & > * {
    margin-bottom: 20px;
  }
`;

const SubTitle = styled.h2``;

export default App;
