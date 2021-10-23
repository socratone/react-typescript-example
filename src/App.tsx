import styled from 'styled-components';
import TypeInheritance from './TypeInheritance';

function App() {
  return (
    <Container>
      <TypeInheritance
        title="타입스크립트"
        description="타입스크립트는 재미있다."
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

export default App;
